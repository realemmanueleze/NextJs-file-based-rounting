import React from 'react'
import {useRouter} from 'next/router'

function Blogs() {
    const route = useRouter();
    const slugs = route.query.slug
    console.log(route.query.slug)
  return (
    <div>Blogs from {slugs}</div>
  )
}

export default Blogs