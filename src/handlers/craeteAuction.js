async function createAuction(event, context) {
  const body=JSON.parse(event.body);

  const auction ={
      title:body.title,
      status:"Open",
      createdAt : new Date()
  } 
  return {
    statusCode: 201,
    body: JSON.stringify({ event, context }),
  };
}

export const handler = createAuction;


