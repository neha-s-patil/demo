import React from 'react'
import Login from './Login';


const container = document.querySelector("#modal-login-container");
 ReactDOM.createPortal(<Login/>, container)
const Portals = () => {
  return (
    <div>Portals</div>
  )
}

export default Portals