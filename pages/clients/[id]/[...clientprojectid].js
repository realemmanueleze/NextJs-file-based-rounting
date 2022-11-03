import React from "react";
import { useRouter } from "next/router";

function Project() {
  const route = useRouter();
  const client = route.query.clientprojectid;
  console.log(client)


  return (
    <div>
      <h1> Specific Project of {client[0]}</h1>
      <h2>Project : {client[1]} </h2>
    </div>
  );
}

export default Project;
