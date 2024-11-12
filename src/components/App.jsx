import './App.css'
import Profile from '../Profile/Profile'
import FriendList from '../components/FriendList/FriendList'
import userData from "../userData.json";
import friends from "../friends.json"
import items from '../transactions.json'
import TransactionHistory from '../components/TransactionHistory/TransactionHistory'

function App() {

  return (
    <>
         <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
   <FriendList friends={friends}/>
   <TransactionHistory items={items} />
    </>
  );
};

export default App;
