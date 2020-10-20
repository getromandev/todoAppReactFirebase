import React from 'react'
import './Todo.css';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, ImageIcon } from '@material-ui/core'
import db from './firebase';
import Button from '@material-ui/core/Button';

function Todo(props) {
    console.log('props ==>', props)
    return (
        <List className='todo_list'>
            <ListItem>

                <ListItemText primary={props.todo.todo} secondary='Wha?' />

            </ListItem>
            <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}> ❌ Delete Me</Button>
        </List>
    )
}
export default Todo

