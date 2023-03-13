import React, { Component } from 'react';
import Registration from './Registration';
import Login from './Login';

export class App extends Component {
  render() {
    return (
      <div>
        <Registration />
        <Login />
      </div>
    )
  }
}

export default App