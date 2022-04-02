import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import "../../stylesheets/Modal.css";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import ArmaGuns from "../../assets/laptop/arma_guns.svg";
import backButton from "./backButton.svg";
import "./ArmageddonModal.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

var collegeList = ["BITS Pilani"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export const ArmageddonModal = (props) => {
  let [data, setData] = useState({});
  const [gameId, setGameId] = useState([]);
  const [openField, setOpenField] = useState(false);
  const [optionsField, setOptionsField] = useState([]);
  const [extraPlayer, setExtraPlayer] = useState(false);
  // const [registerDisabled, setRegisterDisabled] = React.useState(true);

  const loading = openField && optionsField.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }
    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!openField) {
      setOptionsField([]);
    }
  }, [openField]);

  useEffect(async () => {
    await fetch("https://bits-apogee.org/2022/arma/get_games/", {
      headers: { "content-type": "application/json" },
      method: "GET",
      mode: "cors",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        console.log(result);
        console.log(result.games);
        setGameId(result.games);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    const id = armaGame.game_id.id;
    const players = localStorage.getItem("players");

    setData((prevState) => ({
      ...prevState,
      [name]: value,
      players,
      game_id: id,
    }));
  };

  const [playersInfo, setPlayersInfo] = useState([{}, {}, {}, {}, {}, {}]);

  const handlePlayerChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    const index = parseInt(e.target.id.slice(-1));
    console.log(index);

    playersInfo[index][name] = value;
    // if(armaGame.bits_only && name == 'bits_id') playersInfo[index]['bits_id'] = value;
    setPlayersInfo(playersInfo);

    console.log("Players DIYA", playersInfo);

    localStorage.setItem("players", JSON.stringify(playersInfo));

    const id = armaGame.game_id.id;
    console.log(data);
    setData((prevState) => ({
      ...prevState,
      players: playersInfo,
      game_id: id,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("hahahah");
    const loc = localStorage.getItem("players");
    console.log("LOCAL ", loc);
    console.log("FINAL DATA", data);

    for (let i = data.players.length - 1; i >= 0; i--) {
      if (Object.entries(data.players[i]).length === 0) data.players.pop();
    }
    console.log(data.players);

    if (armaGame.bits_only) {
      await fetch("https://bits-apogee.org/arma/register_team_bitsian/", {
        headers: { "content-type": "application/json" },
        method: "POST",
        body: JSON.stringify(data),
        mode: "cors",
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (result) {
          console.log(result);
          if (result.message) alert(result.message);
          if (result.detail) alert(result.detail);
        });
    } else
      await fetch("https://bits-apogee.org/arma/register_team/", {
        headers: { "content-type": "application/json" },
        method: "POST",
        body: JSON.stringify(data),
        mode: "cors",
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (result) {
          console.log(result);
          if (result.message) alert(result.message);
        });
  };

  const [armaStep, setArmaStep] = useState(1);
  const [allGames, setAllGames] = useState(true);
  const [armaGame, setArmaGame] = useState({});
  const armaGames = [
    {
      game_name: "Valorant",
      game_id: gameId.find((el) => el.name == "Test"),
      players_req: "5 + 1 sub ( optional )",
      min_players: 5,
      price: "Rs 250 per team",
      extra_info: [
        { field_name: "captain_discord", name: "Captains Discord ID" },
        { field_name: "captain_ign", name: "Captains IGN" },
        { field_name: "team_name", name: "Team Name" },
      ],
    },
    {
      game_name: "CS-GO",
      game_id: gameId.find((el) => el.name == "Test"),
      players_req: "5 + 1 sub ( optional ) ",
      min_players: 5,
      price: "Rs 250 per team",
      extra_info: [
        { field_name: "captain_discord", name: "Captains Discord ID" },
        { field_name: "captain_stream", name: "Captains Stream Profile Link" },
        { field_name: "team_name", name: "Team Name" },
      ],
    },
    {
      game_name: "BGMI",
      game_id: gameId.find((el) => el.name == "Test"),
      players_req: "4 + 1 sub ( optional )",
      min_players: 4,
      price: "Rs 200 per team",
      extra_info: [
        { field_name: "captain_discord", name: "Captains Discord ID" },
        { field_name: "captain_ign", name: "Captains IGN" },
        { field_name: "team_name", name: "Team Name" },
      ],
    },
    {
      game_name: "Clash Royale",
      game_id: gameId.find((el) => el.name == "Test"),
      players_req: "Individual",
      min_players: 1,
      extra_field: "Player Tag",
      extra_field_name: "player_tag",
      price: "Rs 50 per individual",
      extra_info: [],
    },
    {
      bits_only: true,
      game_name: "FIFA",
      game_id: gameId.find((el) => el.name == "Test"),
      players_req: "Individual",
      min_players: 1,
      price: "Rs 100 per individual",
      extra_info: [],
    },
    {
      bits_only: true,
      game_name: "Tekken",
      game_id: gameId.find((el) => el.name == "Test"),
      players_req: "Individual",
      min_players: 1,
      price: "Rs 50 per individual",
      extra_info: [],
    },
    {
      bits_only: true,
      game_name: "Rocket League",
      game_id: gameId.find((el) => el.name == "Test"),
      players_req: "2 + 1 sub ( optional )",
      min_players: 2,
      price: "Rs 100 per team",
      extra_info: [{ field_name: "team_name", name: "Team Name" }],
    },
  ];

  const handleGameClick = (name) => {
    setArmaStep(2);
    let game = armaGames.find((item) => item.game_name == name);
    console.log(game);
    setArmaGame(game);
  };

  let renderPlayers = [];
  for (let i = 0; i < armaGame.min_players; i++) {
    renderPlayers.push(
      <div class="game-player-details">
        <div className="player-details-title">
          <b>Player {i + 1}</b>
        </div>
        <div className="game-details-input">
          <div className="cell">
            <span>Name*</span>
            <input
              required
              type="text"
              id={"name" + i}
              onChange={handlePlayerChange}
              name="name"
              label="Name"
              sx={{
                width: 300,
                border: "1px solid black",
                color: "black",
                borderRadius: "2px",
              }}
            />
          </div>
          <div className="cell">
            <span>Email*</span>
            <input
              required
              type="email"
              id={"email" + i}
              onChange={handlePlayerChange}
              name="email_id"
              label="Type your email"
              sx={{
                width: 300,
                border: "1px solid black",
                color: "black",
              }}
            />
          </div>
          {armaGame.bits_only ? (
            <div className="cell">
              <span>BITS ID*</span>
              <input
                required
                type="text"
                id={"bits_id" + i}
                onChange={handlePlayerChange}
                name="bits_id"
                label="Type your BITS ID"
                sx={{
                  width: 300,
                  border: "1px solid black",
                  color: "black",
                }}
              />
            </div>
          ) : (
            <div className="cell">
              <span>College*</span>

              <input
                required
                type="text"
                id={"college" + i}
                onChange={handlePlayerChange}
                name="college"
                label="Type your college"
                sx={{
                  width: 300,
                  border: "1px solid black",
                  color: "black",
                }}
              />
            </div>
          )}
          <div className="cell">
            <span>Phone*</span>
            <input
              required
              type="tel"
              variant="outlined"
              onChange={handlePlayerChange}
              id={"phone" + i}
              name="whatsapp_no"
              label="Type your phone number"
              sx={{
                width: 300,
                color: "black",
                border: "1px solid black",
              }}
            />
          </div>
          {armaGame.extra_field ? (
            <div className="cell">
              <span>{armaGame.extra_field}*</span>
              <input
                required
                type="text"
                variant="outlined"
                onChange={handlePlayerChange}
                name={armaGame.extra_field_name}
                label={"Type your " + armaGame.extra_field}
                sx={{
                  width: 300,
                  color: "black",
                  border: "1px solid black",
                }}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      {armaStep == 1 ? (
        <div className="arma-container">
          <div>
            {" "}
            <img src={backButton} alt="" className="backButton" />{" "}
            <h2>Choose your Game</h2>
          </div>
          <div className="extra-menu">
            <div className="game-tabs">
              <span
                onClick={() => setAllGames(true)}
                className={allGames ? "game-tab-active" : ""}
              >
                For All
              </span>
              <span
                onClick={() => setAllGames(false)}
                className={!allGames ? "game-tab-active" : ""}
              >
                BITS Exclusive
              </span>
            </div>
            {allGames ? (
              <div className="all-games">
                <div className="games">
                  <div onClick={() => handleGameClick("Valorant")}>
                    Valorant
                  </div>
                  <div onClick={() => handleGameClick("BGMI")}>BGMI</div>
                  <div onClick={() => handleGameClick("CS-GO")}>CS-GO</div>
                  <div onClick={() => handleGameClick("Clash Royale")}>
                    Clash Royale
                  </div>
                </div>
                <div className="img">
                  <img src={ArmaGuns} />
                </div>
              </div>
            ) : (
              <div className="bits-games">
                <div className="games">
                  <div onClick={() => handleGameClick("Tekken")}>Tekken</div>
                  <div onClick={() => handleGameClick("FIFA")}>FIFA</div>
                  <div onClick={() => handleGameClick("Rocket League")}>
                    Rocket League
                  </div>
                </div>
                <div className="img">
                  <img src={ArmaGuns} />
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="arma-player-details arma-container">
          <div>
            <img
              src={backButton}
              alt=""
              className="backButton"
              onClick={() => {
                setArmaStep(1);
                setExtraPlayer(false);
              }}
            />
            <h2>{armaGame.game_name}</h2>
          </div>
          <div className="game-details-header">
            <div>{armaGame.players_req}</div>
            <div>Price: {armaGame.price}</div>
          </div>
          <form
            name="arma-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(e);
            }}
          >
            <div className="game-details-input">
              {armaGame.extra_info.map((el) => (
                <div className="cell">
                  <span>{el.name}*</span>
                  <input
                    type="text"
                    id={el.field_name}
                    onChange={handleChange}
                    name={el.field_name}
                    label={el.name}
                    sx={{
                      width: 300,
                      border: "1px solid black",
                      color: "black",
                      borderRadius: "2px",
                    }}
                    required
                  />
                </div>
              ))}
            </div>
            <div className="players">
              {renderPlayers}
              {extraPlayer ? (
                <div class="game-player-details">
                  <div className="player-details-title">
                    <b>Player {armaGame.min_players + 1}</b>
                  </div>
                  <div className="game-details-input">
                    <div className="cell">
                      <span>Name*</span>
                      <input
                        required
                        type="text"
                        id={"name" + armaGame.min_players + 1}
                        onChange={handlePlayerChange}
                        name="name"
                        label="Name"
                        sx={{
                          width: 300,
                          border: "1px solid black",
                          color: "black",
                          borderRadius: "2px",
                        }}
                      />
                    </div>
                    <div className="cell">
                      <span>Email*</span>
                      <input
                        required
                        type="email"
                        id={"email" + armaGame.min_players + 1}
                        onChange={handlePlayerChange}
                        name="email"
                        label="Type your email"
                        sx={{
                          width: 300,
                          border: "1px solid black",
                          color: "black",
                        }}
                      />
                    </div>
                    {armaGame.bits_only ? (
                      <div className="cell">
                        <span>BITS ID*</span>
                        <input
                          required
                          type="text"
                          onChange={handlePlayerChange}
                          name="bits_id"
                          pattern="20\d\d[A-Z][A-Z\d][A-Z][A-Z]\d\d\d\dP"
                          label="Type your BITS ID"
                          sx={{
                            width: 300,
                            border: "1px solid black",
                            color: "black",
                          }}
                        />
                      </div>
                    ) : (
                      <div className="cell">
                        <span>College*</span>

                        <input
                          required
                          type="text"
                          id={"college" + armaGame.min_players + 1}
                          onChange={handlePlayerChange}
                          name="college"
                          label="Type your college"
                          sx={{
                            width: 300,
                            border: "1px solid black",
                            color: "black",
                          }}
                        />
                      </div>
                    )}
                    <div className="cell">
                      <span>Phone*</span>
                      <input
                        required
                        type="text"
                        variant="outlined"
                        onChange={handlePlayerChange}
                        id={"phone" + armaGame.min_players + 1}
                        name="phone"
                        label="Type your phone number"
                        sx={{
                          width: 300,
                          color: "black",
                          border: "1px solid black",
                        }}
                      />
                    </div>
                    {armaGame.extra_field ? (
                      <div className="cell">
                        <span>{armaGame.extra_field}*</span>
                        <input
                          required
                          type="text"
                          variant="outlined"
                          onChange={handlePlayerChange}
                          name={armaGame.extra_field_name}
                          label={"Type your " + armaGame.extra_field}
                          sx={{
                            width: 300,
                            color: "black",
                            border: "1px solid black",
                          }}
                        />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            {armaGame.min_players > 1 ? (
              <div
                className="add-player"
                onClick={() => {
                  setExtraPlayer(true);
                  console.log("extra");
                }}
                style={{ display: extraPlayer ? "none" : "" }}
              >
                + Add Player
              </div>
            ) : (
              ""
            )}

            <div className="arma-cta-container">
              {/* <button
                            className="save-players arma-back"
                            onClick={() => {
                                setArmaStep(1);
                                setExtraPlayer(false)
                            }}
                        >
                            Back
                        </button> */}
              <button className="save-players" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
