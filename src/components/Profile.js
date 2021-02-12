import React from "react";

const Profile = (props) => {
    return (
        <div>
            <h2>Welcome {props.user.name}</h2>
            <h3>{props.user.username}</h3>
            <img src={props.user.image} />
            {props.user.friendList.map(friend => <p>{friend}</p>)}
        </div>

    )
}

export default Profile;