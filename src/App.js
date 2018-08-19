import React, { Component } from 'react';
import './App.css';
import NotificationBar from "./components/NotificationBar"

class App extends Component {
  render() {
    return (
      <div className="App">
        <NotificationBar/>
      </div>
    );
  }
}

export default App;
