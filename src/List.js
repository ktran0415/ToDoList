import React from 'react'
import Todo from './Todo'

const List = (props) => (
  <div>
    <h2>{props.name}</h2>
    <ul>
      { props.items.map( item => (
        <Todo 
          name={item.name} 
          complete={item.complete} 
          id={item.id} 
          todoClick={props.todoClick} 
        />))
      }
    </ul>
  </div>
)

export default List;