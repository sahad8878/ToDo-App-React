import React from 'react'

function employee(props) {
  return (
    <div>
      
      <h1> {props.index+1} . {props.name} {props.age} </h1>
    </div>
  )
}

export default employee

