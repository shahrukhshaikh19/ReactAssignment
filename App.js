import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          I am learning React. My life is getting better.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
