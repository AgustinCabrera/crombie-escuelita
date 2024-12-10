const users = [];
export async function DELETE(req,{params}){
  const {id} = params
  const index = users.findIndex((p => p.id === parseInt(id)));
  if (index === -1){
    return new Response("User not found",{
      status:404
    });
  }
  users.splice(index,1);
  return NextResponse.json(
    {status: 200 }
  )
}