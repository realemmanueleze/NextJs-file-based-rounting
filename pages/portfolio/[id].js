import React from 'react'
import {useRouter} from 'next/router'

function Portfolio() {
  const route = useRouter()
  console.log(route)
  const name = route.query.id
  return (
    <div><h1>This is {name} Portfolio</h1></div>
  )
}
export default Portfolio