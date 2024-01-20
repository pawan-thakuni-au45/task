
import './App.css';

  import { useRef,useState,useEffect } from 'react';
  import Button from './componenets/Button';
import TaskList from './componenets/TaskList';

const LOCAL_STORAGE_KEY='tasks'

function App() {

  const [tasks,setTask]=useState([])
  const taskRef=useRef()
  
  useEffect(()=>{
    const storedTasks=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTasks) setTask(storedTasks)
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(tasks))
  },[tasks])

 function addTask(){
  let taskName=taskRef.current.value
  let id=Math.floor(Math.random()*1000)
  if(taskName===null) return alert('please add task')


  setTask(preTask=>{
    return [...tasks,{id:id,name:taskName,complete:false}]
  })
  taskRef.current.value=null

 }

 function toogleTask(id){
  const newTask= [...tasks]
  const task=newTask.find(task=>task.id===id)
  task.complete=!task.complete
  setTask(newTask)
 }

 function removeTask(){
  const newTask=tasks.filter(task=>!task.complete)
  setTask(newTask)
 }
  
  return (
    <div className="App">
     <h1>Add Tasks</h1>

     {tasks.length===0?'':<h1>{tasks.filter(task=>!task.complete).length}</h1>}
    <input ref={taskRef}/>
    <Button  bgColor='red' onClick={addTask} text='add task'></Button>
    <Button onClick={removeTask} text='remove task'></Button>
    {tasks.length>0?<TaskList task={tasks} toogleTask={toogleTask}/>:'no task to show'}

   
    </div>
  );
}

export default App;
