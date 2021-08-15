// - Компоненты всех заданий рендерятся на одной странице, внутри общего
//   контнейра - корневого компонента `<App>`.

import Profile from "./components/ProfileList/Profile";
import user from "./data/user.json";

import Statistics from "./components/StatisticsList/Statistics";
import statisticalData from './data/statistical-data.json';


import FriendList  from "./components/FriendList/FriendList";
// import Section from "./components/FriendList/Section";
import friends from "./data/friends.json";

import TransactionList from "./components/TransactionHistory/TransactionList";
import transactions from './data/transactions.json'

export default function App() {
  return (
    <div className={styleMedia.App}>
     <Profile 
url={user.avatar} 
name={user.name} 
tag={user.tag} 
location={user.location} 
followers={user.stats.followers} 
views={user.stats.views} 
likes={user.stats.likes}
/>

<Statistics title="Upload stats" 
stats={statisticalData} />

<FriendList items={friends}/>

<TransactionList items={transactions}/>

    </div>
  );
}


