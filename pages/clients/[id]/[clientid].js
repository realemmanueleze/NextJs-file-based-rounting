import React from "react";
import { useRouter } from "next/router";

function Client() {
  const route = useRouter();
  const client = route.query.clientid;
const loadProjectHandler = ()=> {
  route.push({
    pathname: "/clients/tech/[clientid]/rice",
    query: {clientid: "Firo"}
  })
}
  return (
    <div>
      <h1> Client {client}</h1>
      <button onClick={loadProjectHandler}>Load Client</button>
    </div>
  );
}

export default Client;
