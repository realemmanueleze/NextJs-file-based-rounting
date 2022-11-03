import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function ClientCategories() {
  const route = useRouter();
  const category = route.query.id;

  return (
    <Link href={`/clients/${category}/AgTech`}>
      <h1>{category} Categories</h1>
    </Link>
  );
}

export default ClientCategories;
