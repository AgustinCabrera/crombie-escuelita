import { NextApiRequest, NextApiResponse } from 'next';
import('../../db.json')

let users: any[] = [];

async function getUsers(){
  const response = await fetch('http://localhost:3001/users');
  const data = await response.json();
  users = data;
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await getUsers();

  if (req.method === 'POST') {
    const { name, email, password, role } = req.body;

    if(role && role != 'user' && role != 'admin'){
      return res.status(400).json({ message: 'Invalid role' });
    }
    const userRole = role || 'user';
    
    const userExists = users.some((user: { email: string }) => user.email === email);

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Add the new user to the list
    const newUser = { 
      id: users.length + 1, 
      name, 
      email, 
      password , 
      rol:userRole
    };
    users.push(newUser);

    return res.status(201).json({ message: 'User registered successfully', user: newUser });
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
