import React, { Component } from "react";
import axios from 'axios';
import { Route, Link } from "react-router-dom";

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
        friendList: []
      },
      apiDataLoaded: false,
      potentialFriends: []
    }
  }

  componentDidMount = async () => {
    const newFriend1 = await axios.get("https://randomuser.me/api/");
    const newFriend2 = await axios.get("https://randomuser.me/api/");
    const newFriend3 = await axios.get("https://randomuser.me/api/");
    const newFriend4 = await axios.get("https://randomuser.me/api/");
    const newFriend5 = await axios.get("https://randomuser.me/api/");
    const newFriend6 = await axios.get("https://randomuser.me/api/");

    const allFriends = [
      newFriend1.data.results[0],
      newFriend2.data.results[0],
      newFriend3.data.results[0],
      newFriend4.data.results[0],
      newFriend5.data.results[0],
      newFriend6.data.results[0],
    ]
    this.setState({
      potentialFriends: allFriends,
    })
  }

  addFriend = (newFriend) => {
    const currentFriends = this.state.user;
    currentFriends.friendList.push(newFriend);

    const potentialFriends = this.state.potentialFriends;
    const newPotentialFriends = potentialFriends.filter(friend => {
      return newFriend.login.uuid !== friend.login.uuid
    })
    console.log(newPotentialFriends);

    this.setState ({
      user: currentFriends,
      potentialFriends: newPotentialFriends
    })
  }

  render() {
    return (
      //console.log(this.state.potentialFriends),
      <div className="App">
        
        <header>
          <nav>
            <Link to = "/">Profile</Link>
            <Link to = "/users">Users</Link>
          </nav>
          <h1>AnacéBook</h1>
        </header>

        <Route exact path="/" render={() => (
          <Profile user={this.state.user} />
        )} />

        <Route path="/users" render={() => (
          <FriendsPage 
            potentialFriends = {this.state.potentialFriends}
            addFriend = {this.addFriend}  
          />
        )} />
      <footer>This is my footer</footer>
      </div>
    );
  }
}

export default App;
