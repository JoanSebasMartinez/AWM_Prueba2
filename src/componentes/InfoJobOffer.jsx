import React, { useState } from "react";
import "./InfoJobOffer.css"
import {Link, useParams} from 'react-router-dom';

function InfoJobOffer(props){
    const {state, getOffer} = props;
    let {id} = useParams();
    const filterState = getOffer(id);
return(
    <div className="containerList">
    <div className="title">
    <h1>Job Offer</h1><Link to={"/api/offers"}><button>Job Offers</button></Link>
    </div><br></br>
    <div className="inputs">
    <label>Job: </label><p>{filterState.job}</p>
    </div>
    <div className="inputs">
    <label>Salary: </label><p>{filterState.salary}</p>
    </div>
    </div>
);
}

export default InfoJobOffer;