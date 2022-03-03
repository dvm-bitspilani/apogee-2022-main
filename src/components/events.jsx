import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Dummy from '../assets/dummy.svg';
import ViewBtn from '../assets/Button.svg'
import Arrow from '../assets/Arrox.svg'
import "../events.css"

function Events() {
    return (
        <div>
            <div className="bg"></div>
            <Link to="/">
                <div className="arrow"><img src={Arrow} alt="" /></div>
            </Link>
            <div className="container">
                <div className="heading">ALL EVENTS</div>
                <div className="card-container">
                    <div className="card">
                        <div className="card-img"><img src={Dummy}/></div>
                        <div className="card-text">
                            <h3>Heading</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            {/* <div className="view-btn"><img src={ViewBtn} /></div> */}
                            <div className="view-btn">View Details</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img"><img src={Dummy}/></div>
                        <div className="card-text">
                            <h3>Heading</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            {/* <div className="view-btn"><img src={ViewBtn} /></div> */}
                            <div className="view-btn">View Details</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img"><img src={Dummy}/></div>
                        <div className="card-text">
                            <h3>Heading</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            {/* <div className="view-btn"><img src={ViewBtn} /></div> */}
                            <div className="view-btn">View Details</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img"><img src={Dummy}/></div>
                        <div className="card-text">
                            <h3>Heading</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            {/* <div className="view-btn"><img src={ViewBtn} /></div> */}
                            <div className="view-btn">View Details</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img"><img src={Dummy}/></div>
                        <div className="card-text">
                            <h3>Heading</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            {/* <div className="view-btn"><img src={ViewBtn} /></div> */}
                            <div className="view-btn">View Details</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img"><img src={Dummy}/></div>
                        <div className="card-text">
                            <h3>Heading</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            {/* <div className="view-btn"><img src={ViewBtn} /></div> */}
                            <div className="view-btn">View Details</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events;