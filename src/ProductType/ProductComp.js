import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Products = (props) => {
    const { attributs, typeChoisi } = props;
    const [formData, setFormData] = useState({});
    const history = useHistory(); 
    

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const valuesList = Object.values(formData);
        axios.post(`http://localhost:8080/insertProduct/${typeChoisi}`, valuesList)
            .then((reponse) => {
                console.log('Post du produit effectué avec succès', reponse.data);
                history.push('/afficher_un_type');
            })
            .catch((error) => {
                console.error('Erreur lors de la publication du produit', error);
            });
    }

    return (
<section id="contact" style={{backgroundColor:'gray',borderRadius:"50px",width:"1300px",marginLeft:"35px"}}>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
         <div style={{fontFamily:"cursive",fontSize:"40px"}}>Ajouter un produit</div>
         <form onSubmit={handleSubmit}>
                {attributs.map((attribut, index) => (
                    <div key={index}>
                        <label htmlFor={attribut}>{attribut}</label>
                        <input
                            type="text"
                            name={attribut}
                            className="form-control"
                            id={attribut}
                            value={formData[attribut] || ''}
                            placeholder={attribut}
                            onChange={handleChange}
                        />
                    </div>
                ))}
                <br />
                <button type="submit" style={{backgroundColor:"black",color:"white",borderRadius:"10px",textAlign:"center"}}>Ajouter</button>
            </form>
        </div>
        <div className="col-md-6" id="col">
            <br />
        <img src="images/mater.jpg" style={{width:"540px",height:"320px"}}/>
        </div>
      </div>
    </div>
  </section> 
    );
}

export default Products;
