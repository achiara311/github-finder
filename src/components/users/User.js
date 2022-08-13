
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
 
function User({ getUser, loading, user: { name } }) {
  const { login } = useParams() //Returns an object of key/value pairs of the dynamic params 
  //from the current URL that were matched by the route path.
 
  useEffect(() => {
    getUser(login) //getting login/userName paramater from getUser() in App.js
  }, [])
 
  return <div>{name}</div>
}
 
export default User

