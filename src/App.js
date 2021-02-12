import React, { Component } from "react";

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: "Anacé Maldonado",
        username: "anace",
        image: "https://i.imgur.com/0rQjeLK.jpg",
        firendList: []
      },
      apiDataLoaded: false,
      potentialFriends: []
    }
  }


  render() {
    return (
      <div className="App">
        <h1>AnacéBook</h1>
      </div>
    );
  }
}

export default App;
