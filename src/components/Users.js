import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TableRow from './TableRow';
import '../styles/styles.css'

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const url = 'https://pacific-mesa-40833.herokuapp.com/api/users';

    const fetchRequest = async () => {
      setLoading(true);
      await axios
        .get(url)
        .then((res) => {
          setUsers(res?.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchRequest();
  }, []);

  if (loading) {
    return <div className='loading'>Loading....</div>;
  }


  return (
    <section className='container'>
     <div>
     <div className='headPart'>
        <h1>Users</h1>
        <input type="text" placeholder='Search by username...'
        onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>SR</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>

        <tbody>
          {users.filter(user => user.username.toLowerCase().includes(query)).map((user) => (
            <TableRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
     </div>
    </section>
  );
};

export default Users;
