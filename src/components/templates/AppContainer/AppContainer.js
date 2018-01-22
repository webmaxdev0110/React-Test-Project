// Modules
import React, { Component } from 'react';
import Radium from 'radium';
import { Provider } from 'react-redux'

import store from '../../store';

// Component styles
import styles from './styles';

// Components
import RentalTemplate from '../Main'

class AppContainer extends Component{
  showModal(rentalInfo) {

  }
  render() {
    return (
      <Provider store={store}>
        <div style={styles.container}>
          <div style={styles.content}>
            <RentalTemplate />
          </div>
        </div>
      </Provider>
    );
  }
}

export default Radium(AppContainer);
