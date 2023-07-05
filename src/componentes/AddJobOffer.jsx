import {React, useState} from "react";
import "./AddJobOffers.css";
import {useNavigate, Link} from 'react-router-dom';
import JobOffers from "./JobOffers";

function AddJobOffer(props){
    const {state, setState, AddOffer} = props;

    const[nuevo, setNuevo] = useState({
        id: state.length+1,
        job: "",
        salary: ""
    });

    let navigate = useNavigate();

    const agregar = () => {
        var listado = [...state];
        if(nuevo.job == ""){
            alert("Todos los campos son obligatorios");
        }else if(nuevo.salary == 0){
            alert("Todos los campos son obligatorios");
        }else{
        listado.push(nuevo);
        }
        setState(listado);

    };

    const handlerJob = (e) =>{
        setNuevo({...nuevo, "job": e.target.value})
    };
    const handlerSalary = (e) =>{
        setNuevo({...nuevo, "salary": e.target.value})
    };

return(
    <div className="containerInputs">
    <div className="title">
    <h1>Add new job offer   </h1>
    <Link to={"/api/offers"}><button>Job Offers</button></Link>
    </div><br></br>
    <div className="inputs">
    <label>Job: </label>
    <select id="job" onChange={handlerJob}>
        <option></option>
        <option value="Frontend developer">Frontend developer</option>
        <option value="Backend developer">Backend developer</option>
        <option value="DevOps">DevOps</option>
        <option value="Fullstack developer">Fullstack developer</option>
    </select><br></br>
    </div>
    <div className="inputs">
    <label>Salary: </label>
    <input type="number" id="salary" onChange={handlerSalary}></input><br></br>
    </div><br></br>
    <Link to={"/api/offers"}><button onClick={agregar}>Add Offer</button></Link>
    </div>
);
}

export default AddJobOffer;