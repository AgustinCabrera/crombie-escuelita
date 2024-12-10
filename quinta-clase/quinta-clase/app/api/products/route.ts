import { isAdmin } from '@/app/lib/authorize';
import { NextApiRequest, NextApiResponse } from 'next';

const products: { name: string; price: number; categoryId: number }[] = [];

const getProduct = async (): Promise<Response> => {
  return await fetch('http://localhost:3001/products', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  await getProduct();

  if (req.method === 'POST') {
    try {
      const user = await isAdmin(req, res); 
      if(!user){
        return res.status(403).json({message: "Forbidden: Admins only"});
      }
      const { name, price, categoryId } = req.body;

      if (!name || !price || !categoryId) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newProduct = {
      name,
      price,
      categoryId,
    };
    products.push(newProduct);

      return res.status(201).json({ message: 'Product created successfully', product: newProduct });
    } catch (error) {
      return res.status(500).json({ message: 'Something went wrong' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
