import React from "react";

const FriendsPage = (props) => {
    return (
        console.log(props),
        <div className="potential">
            <h4>They could be your friends:</h4>
            {props.potentialFriends.map(friend => 
                <div key = {friend.cell}> 
                    <h5>{friend.name.first} {friend.name.last}</h5>
                    <img className="thumb" src={friend.picture.thumbnail} />
                    <p>{friend.login.username}</p>
                </div>
                )}
        </div>
    )
}

export default FriendsPage;