import React, { Component } from "react";

import './App.css';

import Profile from "./components/Profile";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: "Anacé Maldonado",
        username: "anace",
        image: "https://i.imgur.com/0rQjeLK.jpg",
        friendList: ["Nat", "Fer"]
      },
      apiDataLoaded: false,
      potentialFriends: []
    }
  }


  render() {
    return (
      <div className="App">
        <h1>AnacéBook</h1>
        <Profile user={this.state.user} />
      </div>
    );
  }
}

export default App;
