import React from 'react'

const Task = ({task,onToogle,toogleTask}) => {

    function handleToogleTask(){
        toogleTask(task.id)
    }
  return (
    <div className='task-component'>
      <input type='checkbox' checked={task.complete} onChange={handleToogleTask} onDoubleClick={onToogle}></input>
      {task.name}
    </div>
  )
}

export default Task