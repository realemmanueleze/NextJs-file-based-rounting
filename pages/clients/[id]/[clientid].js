import React from "react";
import { useRouter } from "next/router";

function Client() {
  const route = useRouter();
  const client = route.query.clientid;

  return (
    <div>
      <h1> Client {client}</h1>
    </div>
  );
}

export default Client;
