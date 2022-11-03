import React from "react";
import Link from 'next/link'

function AllClients() {
  const client = [
    { id: "val", name: "Valarie" },
    { id: "emma", name: "Emmanuel" },
  ];

  return (
    <ul>
      {client?.map(({ name, id }) => (
        <li key={name}>
          <Link href={`/clients/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default AllClients;
