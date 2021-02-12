import React from "react";

const FriendsPage = (props) => {
    return (
        //console.log(props),
        <div>
            <h4>{props.potentialFriends.first} {props.potentialFriends.last} could be your friend!</h4>
        </div>
    )
}

export default FriendsPage;