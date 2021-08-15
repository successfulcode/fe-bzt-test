import { Component } from 'react';
import oops from '../../assets/oops.png';

export default class ErrorBoundry extends Component {
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='is-flex is-justify-content-center mt-6'>
          <img src={oops} alt='Error' width='500' height='500' />
        </div>
      );
    }
    return this.props.children;
  }
}
