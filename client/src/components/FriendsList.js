import React from 'react'

const FriendList = ({friends , removeFriend , toggleOpt}) => {
    return (
        <div>
        <h1>My Friends</h1>
        {friends.map((friend , ind) => (
            <h5 >{friend.username}</h5> 
        ))}
        </div>
    )
}

export default FriendList
