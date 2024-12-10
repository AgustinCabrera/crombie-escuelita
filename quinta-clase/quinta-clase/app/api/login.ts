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
    const { email, password } = req.body;

    // Find user by email
    const user = users.find((user: { email: string }) => user.email === email);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the password is correct
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    return res.status(200).json({ message: 'Login successful', user });
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}