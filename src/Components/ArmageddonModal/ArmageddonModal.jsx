import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import "../../stylesheets/Modal.css";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import ArmaGuns from "../../assets/laptop/arma_guns.svg";

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
    let [data, setData] = React.useState({});
    const [colleges, setColleges] = React.useState([]);
    const [events, setEvents] = React.useState([]);
    const [kernelEvents, setKernelEvents] = React.useState([]);
    const [finalNames, setNames] = React.useState([]);
    const [openField, setOpenField] = React.useState(false);
    const [optionsField, setOptionsField] = React.useState([]);
    const [collegeName, setCollegeName] = React.useState([]);
    // const [registerDisabled, setRegisterDisabled] = React.useState(true);

    const loading = openField && optionsField.length === 0;

    React.useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }
        return () => {
            active = false;
        };
    }, [loading]);

    React.useEffect(() => {
        if (!openField) {
            setOptionsField([]);
        }
    }, [openField]);

    const names = [];

    React.useEffect(async () => {
        await fetch("https://bits-apogee.org/registrations/events/", {
            headers: { "content-type": "application/json" },
            method: "GET",
            mode: "cors",
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (result) {
                setEvents(result.data[0]);
                result.data[0].events.forEach((item) => {
                    names.push(item.name);
                });
                setNames(names);
            });

        await fetch("https://bits-apogee.org/registrations/kernel_events/", {
            headers: { "content-type": "application/json" },
            method: "GET",
            mode: "cors",
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (result) {
                console.log(result.data[0].events);
                setKernelEvents(result.data[0].events);
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);

        setData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        console.log(data);
    };

    let playersInfo = [{}, {}, {}, {}, {}];

    const handlePlayerChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);

        const index = parseInt(e.target.id.slice(-1));
        console.log(index);

        playersInfo[index][name] = value;

        console.log("Players DIYA", playersInfo);

        localStorage.setItem("players", playersInfo);

        // setData((prevState) => ({
        //   ...prevState,
        //   players: playersInfo,
        // }));
        // console.log(data);
    };

    const handleSubmit = () => {
        console.log("boom");

        const loc = localStorage.getItem("players");
        console.log("LOCAL ", loc);



        setData((prevState) => ({
            ...prevState,
            players: loc,
        }));

        console.log("FINAL DATA", data);
    }

    const [armaStep, setArmaStep] = useState(1);
    const [allGames, setAllGames] = useState(true);
    const [armaGame, setArmaGame] = useState({});
    const armaGames = [
        {
            game_name: "Valorant",
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
            players_req: "Individual",
            min_players: 1,
            price: "Rs 100 per individual",
            extra_info: [],
        },
        {
            bits_only: true,
            game_name: "Tekken",
            players_req: "Individual",
            min_players: 1,
            price: "Rs 50 per individual",
            extra_info: [],
        },
        {
            bits_only: true,
            game_name: "Rocket League",
            players_req: "2 + 1 sub ( optional )",
            min_players: 2,
            price: "Rs 100 per team",
            extra_info: [
                { field_name: "captain_contact", name: "Captains Contact" },
                { field_name: "team_name", name: "Team Name" },
            ],
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
                            type="email"
                            id={"email" + i}
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
                                type="text"
                                onChange={handleChange}
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
                            type="text"
                            variant="outlined"
                            onChange={handlePlayerChange}
                            id={"phone" + i}
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
                                type="text"
                                variant="outlined"
                                onChange={handleChange}
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
                    <h2>Choose your Game</h2>
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
                    <h2>{armaGame.game_name}</h2>
                    <div className="game-details-header">
                        <div>{armaGame.players_req}</div>
                        <div>Price: {armaGame.price}</div>
                    </div>
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
                                />
                            </div>
                        ))}
                    </div>
                    <div className="players">{renderPlayers}</div>
                    {armaGame.min_players > 1 ? (
                        <div
                            className="add-player"
                            onClick={() => (armaGame.min_players = armaGame.min_players + 1)}
                        >
                            + Add Player
                        </div>
                    ) : (
                        ""
                    )}
                    <div className="arma-cta-container">
                        <button
                            className="save-players arma-back"
                            onClick={() => {
                                setArmaStep(1);
                            }}
                        >
                            Back
                        </button>
                        <button className="save-players" onClick={handleSubmit}>Save</button>
                    </div>
                </div>
            )}
        </div>
    );
};