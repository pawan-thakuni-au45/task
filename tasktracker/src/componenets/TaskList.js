import React from 'react'
import Task from './Task'

const TaskList = ({task,toogleTask,onToogle}) => {
  return (
    <div>
    {task.map(task=><Task  key={task.id} task={task} toogleTask={toogleTask} onToogle={onToogle}/>)}
    </div>
  )
}

export default TaskList