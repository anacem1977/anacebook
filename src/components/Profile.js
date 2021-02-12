import React from "react";

const Profile = (props) => {
    return (
        <div>
            <img src={props.user.image} />
            <section>
                <h2>Welcome {props.user.name}</h2>
                <h3>Your username is: {props.user.username}</h3>
            </section>
            
            <h3 className="friends">These are your friends:</h3>
            {props.user.friendList.map(friend => <p  className="friends">{friend}</p>)}
        </div>

    )
}

export default Profile;