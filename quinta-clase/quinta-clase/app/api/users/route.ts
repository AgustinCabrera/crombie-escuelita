import {NextRequest} from "next/server";
const users = [];
export async function GET(request: NextRequest){
  return new Response(JSON.stringify(users),{
    headers:{
      "Content-Type":"application/json"
    },
    status:200
  });
}
export async function POST(request: NextRequest){
try {
  const data = await request.json();
  users.push(data);
  return new Response(JSON.stringify(users),{
    headers:{
      "Content-Type":"application/json"
    },
    status:200
  });
  
} catch (error) {
  console.log(error);
}
}
export async function UPDATE(request: NextRequest){
try {
    const data = await request.json();
    const {id} = request.params;
    users[id] = data;
    return new Response(JSON.stringify(data),{
      headers:{
        "Content-Type":"application/json"
      },
      status:200
    });
} catch (error) {
  console.log(error);
}
}
export async function DELETE(request: NextRequest){
  try {
    const data = await request.json();
    const {id} = request.id;
    users.splice(id,1);
    return new Response(JSON.stringify(data),{
      headers:{
        "Content-Type":"application/json"
      },
      status:200
    });
  } catch (error) {
    console.log(error);
  }
}