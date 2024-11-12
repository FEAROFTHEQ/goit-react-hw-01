function FriendList ({friends}){
 return(
    <div>
<ul>
    {friends.map( friend =>     
    <li key={friend.id}>
        <img src={friend.avatar} alt="Avatar" width="48" />
        <p>{friend.name}</p>
        {friend.isOnline ? <p>Online</p> : <p>Offline</p> }
    </li>

    )}

</ul>
</div>

 )
};

export default FriendList;