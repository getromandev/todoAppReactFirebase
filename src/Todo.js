import React from 'react'
import './Todo.css';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, ImageIcon } from '@material-ui/core'

function Todo(props) {
    console.log('props ==>', props)
    return (
        <List className='todo_list'>
            <ListItem>

                <ListItemAvatar></ListItemAvatar>

                <ListItemText primary={props.text} secondary='Wha?' />

            </ListItem>
        </List>
    )
}
export default Todo

