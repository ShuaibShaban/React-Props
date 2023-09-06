import React from 'react'

const Cards = (props) => {
  return (
    <div>
    <h1>My Contacts</h1>
    <h2>{props.name}</h2>
    <img
      src={props.img}
      alt={props.alt}
    />
    <p>{props.tel}</p>
    <p>{props.email}</p>
  </div>
  )
}

export default Cards
