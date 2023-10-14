import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const res = await fetch ('https://dummyjson.com/users');
    const data = await res.json();
    if (data && Array.isArray(data.users)) {
      setUsers(data.users); 
    } else {
      console.error('No user data found');
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='bg'>
      <h1>Dummy Data</h1>
      {Array.isArray(users) && users.length > 0 ? (
        <table className="user-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Profile Photo</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td><img src={user.image} alt="Profile" width="50" height="50" /></td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
        )
       : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;