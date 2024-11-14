"use client"; 
import React, { useState, useEffect } from 'react';

interface UserType {
  id: number;
  name: string;
  username: string;
  email: string;
}

const User = () => {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/', {
          method: 'GET',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>User</h1>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </>
  );
};

export default User;
