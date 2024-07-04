import React from 'react'

function Card({name,email,userName,phoneNumbre}) {
  return (
    <div style={{width:300, border:'2px solid white', margin:10, padding:15}}>
        <h3>Name:{name}</h3>
        <h4>Email:{email}</h4>
        <h4>User Name:{userName}</h4>
        <h4>Phone Number:{phoneNumbre}</h4>
    </div>
  )
}

export default Card