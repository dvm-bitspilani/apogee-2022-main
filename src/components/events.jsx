import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dummy from '../assets/dummy.svg';
import ViewBtn from '../assets/Button.svg'
import Arrow from '../assets/Arrox.svg'
import Modal from '@mui/material/Modal';
import { styled, Box } from '@mui/system';


import "../events.css"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60vw',
    height: '60vh',
    bgcolor: 'rgba(7, 9, 73, 0.09)',
    border: '1px solid rgba(209, 213, 219, 0.3);',
    backdropFilter: 'blur(20px)',
    borderRadius: '20px',
    padding: '50px 100px',


    // boxShadow: 24,
    // p: 5,
    // filter:'blur(3px) saturate(180%)'
};

function Events() {
    const [events, setEvents] = React.useState([])
    React.useEffect(() => {
        fetch("https://bits-apogee.org/registrations/events/", {
            headers: { "content-type": "application/json" },
            method: "GET",
            mode: "cors",
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (result) {
                console.log(result);
                console.log(result.data);
                console.log(result.data[0]);
                console.log(result.data[0].events);
                setEvents(result.data[0].events);
            });
    }, [])

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <div className="bg"></div>
            <Link to="/">
                <div className="arrow"><img src={Arrow} alt="" /></div>
            </Link>
            <div className="container">
                <div className="heading">ALL EVENTS</div>
                <div className="card-container">
                    {events.map(el =>
                        <div className="card">
                            <div className="card-img"><img src={Dummy} /></div>
                            <div className="card-text">
                                <h3>{el.name}</h3>
                                <p>{el.details}</p>
                                <div className="view-btn" onClick={handleOpen}>View Details</div>
                                <div className="ModalBox">

                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>
                                            <div className="modalHeading">
                                                {el.name}
                                            </div>

                                        </Box>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Events;