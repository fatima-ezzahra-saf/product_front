import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Acceuil/HomePage';
import AddProduct from './ProductType/AddProduct';

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/"><Home/></Route>
      <Route path="/ajouter_un_produit"><AddProduct/></Route>
      <Route path="/ajouter_un_type"><Home/></Route>
      <Route path="/afficher_un_type"><Home/></Route>
    </Switch>
    </Router>
  );
}

export default App;
