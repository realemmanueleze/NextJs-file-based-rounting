import React from "react";
import { useRouter } from "next/router";

function ClientCategories() {
  const route = useRouter();
  const category = route.query.id;

  return (
    <div>
      <h1>{category} Categories</h1>
    </div>
  );
}

export default ClientCategories;
