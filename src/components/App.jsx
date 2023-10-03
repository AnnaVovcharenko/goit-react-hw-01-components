import user from './Profile/user.json';
import Profile from './Profile/Profile.jsx';

import data from '../components/Statistics/data.json';
import Statistics from '../components/Statistics/Statistics';

import friends from '../components/FriendList/friends.json';
import FriendList from '../components/FriendList/FriendList';

import transactions from '../components/TransactionHistory/transactions.json';
import TransactionHistory from '../components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </section>
      <section>
        <Statistics title="Upload stats" stats={data} />
      </section>
      <section>
        <FriendList friends={friends} />
      </section>
      <section>
        <TransactionHistory items={transactions} />;
      </section>
    </div>
  );
};
