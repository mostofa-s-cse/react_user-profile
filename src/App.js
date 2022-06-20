import './App.css';
import { useState } from 'react';
import fakeData from './fakeData';
import Profile from './components/Profile/Profile';
import Selary from './components/Selary/Selary';

function App() {
  const first15 = fakeData.slice(0,15);
  const [user,setUser] = useState(first15);

  const [selary,setSelary] = useState([]);

  const handleAddUser = (user) => {
  const newselary = [...selary, user];
  setSelary(newselary);
  }

  return (
    <div className="App">
      <h1>Total User : {user.length}</h1>
      <Selary selary={selary}></Selary>
      <hr />
      {
        user.map(user => <Profile  user ={user} key = {user.id} handleAddUser = {handleAddUser} ></Profile>)
      }
    </div>
  );
}

export default App;
