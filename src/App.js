import './App.css';
import { useState } from 'react';
import fakeData from './fakeData';
import Profile from './components/Profile/Profile';
import Selary from './components/Selary/Selary';

function App() {
  const first15 = fakeData.slice(0,15);
  const [user,setUser] = useState(first15);
  
  const [selary,setSelary] = useState([]);
  const [team,setTeam] = useState([]);

  const addMember = (name) => {
    setTeam([...team,name]);
  }

  const handleAddUser = (user) => {
  const newselary = [...selary, user];
  setSelary(newselary);

  
  }

  return (
    <div className="App">
      <h1 className={`bg-warning p-2 text-center`}>Total User : {user.length}</h1>
      <Selary selary={selary}></Selary>
      <div className={`bg-info p-2 mt-2 text-center`}>
      <h1>All Team Member</h1>
      <ul>
        {
          team.map(m => <p> {m}</p>)
        }
      </ul>
      </div>
    
      {
        user.map(user => <Profile  user ={user} key = {user.id} handleAddUser = {handleAddUser}  addMember ={addMember}></Profile>)
      }
    </div>
  );
}

export default App;
