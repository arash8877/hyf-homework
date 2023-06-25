import React from 'react'
import ListItem from './ListItem'
import './List.css'
import { tasks } from '../tasks'

const List = () => {
  return (
    <div className='list'>
      <ul>
        {
          tasks.map(task => {
            return (
              <ListItem id={task.id} todo={task.todo} time={task.time} key={task.id}/>
            )
          })
        }
      </ul>
    </div>
  )
}

export default List