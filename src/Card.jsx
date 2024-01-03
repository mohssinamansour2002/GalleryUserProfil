import React from 'react'

export default function Card(props) {
  return (
    <div>
      <ul>
        <li>
          <img src={props.imageUrl} alt="Static Image" />
        </li>
        <li>id : {props.id}</li>
        <li>name : {props.name}</li>
        <li>description : {props.description}</li>
        <li>age : {props.age}</li>
        <li>mobilite : {props.mobilite}</li>
        <li>interests : {props.interests}</li>
      </ul>
    </div>
  )
}
