import React from "react";
import "./JobOffers.css";
import {Link, useNavigate} from 'react-router-dom';


const JobOffers = (props) => {
    const {state} = props; 
    let navigate = useNavigate();

return(   
    <div className="containerList">
    <div className="title">
    <h1>Job Offers</h1>
    <button onClick={() => navigate("/api/offers/new")}>Add Offer</button>
    </div>
        {state.map((item,i) => {
            return(
            <div className="jobContainer" key={i}>
                <p>{item.job} - {item.salary}</p>
                <div><Link to={"/api/offers/"+item.id}><button>View Job</button></Link></div>
            </div>
            );
        })}
    </div>
);
}

export default JobOffers;