import React from 'react';
import {useState} from 'react'
import Button from './components/Button.js';
import User from './components/User.js';
import Layout from './components/Layout.js';// 🔥 Make sure to import the App.css file.
import './App1.css';

const App = () => {
  const styles={
    background: "#D3D3D3",
    height: "60px",
    borderRadius: "5px",
    marginTop: "2px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px",
  }
  const [users, setUsers] = useState([
      { id: 1, age: 30, name: "React" },
      { id: 2, age: 24, name: "JS" },
      { id: 3, age: 21, name: "HTML" },
  ]);
  const [doneItems, setdoneItem] = useState([
    { id: 2, age: 24, name: "JS" },
]);
  const [name, setName] = useState(''); // <- State to use for user input
	const [age, setAge] = useState();
  const addUserHandler = () => {
    const newUser = {
      id: users.length + doneItems.length + 1,
      age: age,
      name: name,
    };

    setUsers([...users, newUser]);
  };
  const deleteUserHandler = (id) => {
    const newUserList = users.filter((user) => user.id !== id);
    
    const doneItem= users.filter((user) => user.id === id)[0];
    
    setUsers(newUserList);
    setdoneItem([...doneItems, doneItem]);
  };
  return (
   <Layout>
   <div>
    <div style={styles}>
      Title: &nbsp;
      <input value={name}
      onchange={(e) => setName(e.target.value)}
      />
       &nbsp;&nbsp; &nbsp;&nbsp;

       Content: &nbsp;
      <input value={age}
      onchange={(e) => setAge(e.target.value)}
      />
       &nbsp;&nbsp;
       <Button onClick={addUserHandler}>Add</Button>
    </div>
    <h3>Working..🔥</h3>
    <div className='app-style'>
      {users.map((user) => {
        return <User user={user} key={user.id} handleDelete={deleteUserHandler}/>;
      })}
    </div>
    <hr></hr>
    <h3>Done..!🎉</h3>
    <div className='app-style'>
    {doneItems.map((doneItem) => {
        return <User user={doneItem} key={doneItem.id}/>;
      })}
      </div>
   </div>
   </Layout>
  );
};

export default App;

