import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '../../Types/User';
import { UserCard } from '../UserCard';
import './userList.scss';


export const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <main className="users">
      <h1 className="users__title">User list</h1>
      <ul className="users__list">
        {users.map(user => (
          <UserCard user={user} key={user.id} />
        ))}
      </ul>
    </main>
  );
};

