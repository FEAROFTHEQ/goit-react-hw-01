import FriendListItem from "../FriendListItem/FriendListItem";
import s from "./FriendList.module.css"

function FriendList ({friends}){
 return(
    <div>
<ul className={s.container}>
    {friends.map( friend =>     
        <FriendListItem key={friend.id} friend={friend}/>)}
</ul>
</div>
 )
};

export default FriendList;