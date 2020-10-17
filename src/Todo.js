import React from 'react'

function Todo(props) {
    console.log('props ==>', props)
    return (
        <div>
          <li>{props.text}</li>  
        </div>
    )
}

export default Todo
