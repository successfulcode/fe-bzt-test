import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductsList from './ProductsList';
import { Provider } from 'react-redux';
import rootReducer from '../../redux/reducers/rootReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

describe('ProductsList', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <ProductsList />
      </Provider>
    );
  });
});
