import s from "./FriendList.module.css"

function FriendList ({friends}){
 return(
    <div>
<ul className={s.container}>
    {friends.map( friend =>     
    <li key={friend.id} className={s.item}>
        <img className={s.image} src={friend.avatar} alt="Avatar" width="48" />
        <p className={s.name}>{friend.name}</p>
        {friend.isOnline ? <p className={s.online}>Online</p> : <p className={s.offline}>Offline</p> }
    </li>
    )}
</ul>
</div>
 )
};

export default FriendList;