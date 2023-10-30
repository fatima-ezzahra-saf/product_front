import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import Products from "./ProductComp";
import Prod from "../Acceuil/AccProd";

const AddProduct = () => {
    const [types,setType]=useState([]);
    const handleChange = (event) => {
        const {value } = event.target;
        setTypeChoisi(value);
    };
    const [attributs,setAttributs]=useState([]);
    const [typeChoisi,setTypeChoisi]=useState(null);
    const [visibilite,setVisibilite]=useState(false);
    const [visible,setVisible]=useState(true);

    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post(`http://localhost:8080/get_attributs/${typeChoisi}`)
        .then((reponse)=>{
            console.log(reponse.data);
            setAttributs(reponse.data);
            setVisibilite(true);
            setVisible(false);
        }).catch('error de get attributs')
        
    }

    useEffect(()=>{
        axios.get("http://localhost:8080/get_type")
        .then((reponse)=>{
            setType(reponse.data);
            console.log('get des stype bien effectuer')
        }).catch(console.log('error de get type'));
    },[])
    return ( 
        <div>
            <div style={{textAlign:"center",marginTop:"30px"}}>
            <h3 style={{fontFamily:"cursive"}}>Choisir le type de produit</h3>
            <form onSubmit={handleSubmit}>
            <select name="type" id="" style={{width:"200px",borderRadius:"20px",height:"50px",fontFamily:"cursive"}} value={typeChoisi} onChange={handleChange}>
                {types.map((type) => (
                    <option key={type.id} value={type.nom} style={{fontFamily:"cursive"}}>{type.nom}</option>
                ))}
            </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-dark" >ok</button>
            </form>
            </div><br/><br/>
            {visible && <Prod/>}
            {visibilite && <Products attributs={attributs} typeChoisi={typeChoisi}/>}
        </div>
    );
}

export default AddProduct;