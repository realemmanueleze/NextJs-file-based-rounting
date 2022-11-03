import React from "react";
import Link from 'next/link'

function AllClients() {
  const client = [
    { id: "tech", name: "Technology" },
    { id: "agric", name: "Agriculture" },
  ];

  return (
    <ul>
      {/* {client?.map(({ name, id }) => (
        <li key={name}>
          <Link href={`/clients/${id}`}>{name}</Link>
        </li>
      ))} */}
      {client?.map(({ name, id }) => (
        <li key={name}>
          <Link href={{
            pathname: '/clients/[id]',
            query: {id: id}
          }}>{name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default AllClients;
