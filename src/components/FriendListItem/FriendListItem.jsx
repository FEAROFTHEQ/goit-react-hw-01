import s from "./FriendListItem.module.css"

function FriendListItem({friend}){
   return(
    <li className={s.item}>
   <img className={s.image} src={friend.avatar} alt="Avatar" width="48" />
    <p className={s.name}>{friend.name}</p>
    {friend.isOnline ? <p className={s.online}>Online</p> : <p className={s.offline}>Offline</p> }
    </li>
    ) 
    }


export default FriendListItem;