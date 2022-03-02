import React, { Component } from 'react';
import Dummy from '../assets/dummy.svg';
import ViewBtn from '../assets/Button.svg'
import Arrow from '../assets/Arrox.svg'
import "../events.css"

function Events() {
    return (
        <React.Fragment>
            <div className="bg"></div>
            <div className="arrow"><img src={Arrow} alt="" /></div>
            <div className="container">
                <div className="heading">ALL EVENTS</div>
                <div className="card-container">
                    <div className="card">
                        <div className="card-img"><img src={Dummy}/></div>
                        <div className="card-text">
                            <h3>Heading</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div class="view-btn"><img src={ViewBtn} /></div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img"><img src={Dummy}/></div>
                        <div className="card-text">
                            <h3>Heading</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div class="view-btn"><img src={ViewBtn} /></div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img"><img src={Dummy}/></div>
                        <div className="card-text">
                            <h3>Heading</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div class="view-btn"><img src={ViewBtn} /></div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img"><img src={Dummy}/></div>
                        <div className="card-text">
                            <h3>Heading</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div class="view-btn"><img src={ViewBtn} /></div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img"><img src={Dummy}/></div>
                        <div className="card-text">
                            <h3>Heading</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div class="view-btn"><img src={ViewBtn} /></div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img"><img src={Dummy}/></div>
                        <div className="card-text">
                            <h3>Heading</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div class="view-btn"><img src={ViewBtn} /></div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Events;