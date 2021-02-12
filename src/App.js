import React, { Component } from "react";
import axios from 'axios';

import './App.css';

import Profile from "./components/Profile";
import FriendsPage from "./components/FriendsPage"; 

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

  componentDidMount = async () => {
    const newFriend = await axios.get("https://randomuser.me/api/");
    this.setState({
      potentialFriends: newFriend.data.results[0].name,
      apiDataLoaded: true,
    })
  }

  render() {
    return (
      //console.log(this.state.potentialFriends),
      <div className="App">
        <h1>AnacéBook</h1>
        <Profile user={this.state.user} />
        { this.state.apiDataLoaded
          ? <div><FriendsPage potentialFriends = {this.state.potentialFriends}/></div>
          : <p>... Loading ...</p>}
      </div>
    );
  }
}

export default App;
