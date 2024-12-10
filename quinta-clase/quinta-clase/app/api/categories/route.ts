import { NextApiRequest, NextApiResponse } from "next";
import { isAdmin } from "@/app/lib/authorize";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST"){
    const user = await isAdmin(req,res);
    if(!user){
      return res.status(403).json({message: "Forbidden: Admins only"});
    }
    await fetch('http://localhost:3001/categories',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    })
    res.status(200).json({message: "Category created"});
  }
  return res.status(400).json({message: " Category not found"}); 
}
export default handler;