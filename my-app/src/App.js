import React, { Component, Fragment } from 'react';
import CartList from './components';

export default class App extends Component {
  render() {
    return (
      <>
        <CartList store = {this.props.store} />
      </>
    )
  }
}
