import './App.css';
import { useState } from 'react';
import fakeData from './fakeData';
import Profile from './components/Profile/Profile';

function App() {
  const first15 = fakeData.slice(0,15);
  const [user,setUser] = useState(first15);

  return (
    <div className="App">
      <h1>Total User : {user.length}</h1>
      <h2>User Added : {} </h2>
      {
        user.map(user => <Profile  user ={user} key = {user.id}></Profile>)
      }
    </div>
  );
}

export default App;
