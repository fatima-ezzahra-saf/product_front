import 'bootstrap/dist/css/bootstrap.min.css';
import Type from '../ProductType/Type';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="container" style={{ marginTop: "50px", backgroundColor: "#c9c4c4" }}>
        <div className="row">
          <div className="col-12 col-lg-6" style={{ marginTop: "200px"}}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/ajouter_un_produit' className="btn btn-dark">Ajouter un produit</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/ajouter_un_type' className="btn btn-dark">Ajouter un nouveau Type</Link><br /><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/afficher_un_type' className="btn btn-dark">afficher les produits</Link>
          </div>
          <div className="col-12 col-lg-6">
            <img src="images/products.webp" className="img-fluid" style={{ height: "500px" }} />
          </div>
        </div>
      </div>
    </>
    );
}

export default Home;

