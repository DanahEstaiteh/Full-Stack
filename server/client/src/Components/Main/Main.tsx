import React from 'react';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import CategoriesList from '../CategoriesList/CategoriesList';
import PosHeader from '../PosHeader/PosHeader';
import PosPage from '../PosPage/PosPage';
import ProductData from '../productData/ProductData';

const Main = () => {
    return (
        <Router>
            <PosHeader />
  <Switch>
      <Route path="/Categories" component={CategoriesList} />
      <Route path="/Products" component={ProductData} />
      <Route path="/POS" component={PosPage} />
  </Switch>
        </Router>
    )
}

export default Main;
