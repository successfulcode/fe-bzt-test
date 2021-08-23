import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Product from './Product';
import { Provider } from 'react-redux';
import rootReducer from '../../redux/reducers/rootReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '506094'
  })
}));

describe('Product', () => {
  it('should render correctly', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Product />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByText(/Brand:/i)).toBeInTheDocument();
    expect(screen.getByText(/Product name:/i)).toBeInTheDocument();
    expect(screen.getByText(/Price:/i)).toBeInTheDocument();
    expect(screen.getByText(/Back to previous page/i)).toBeInTheDocument();
  });
});
