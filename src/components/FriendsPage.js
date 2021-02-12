import React from "react";

const FriendsPage = (props) => {
    return (
        console.log(props),
        <div>
            <h2>This is my potential friend</h2>
            <p>{props.potentialFriends.first} {props.potentialFriends.last}</p>
        </div>

    )
}

export default FriendsPage;