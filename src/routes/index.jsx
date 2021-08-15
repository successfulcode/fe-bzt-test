import { Route, Redirect, Switch } from 'react-router-dom';
import ProductsList from '../components/ProductsList/ProductsList';
import Product from '../components/Product/Product';

const Routes = () => {
  return (
    <Switch>
      <Route path='/product/:id' render={() => <Product />} />
      <Route path='/' render={() => <ProductsList />} />
      <Redirect to='/' />
    </Switch>
  );
};

export default Routes;
