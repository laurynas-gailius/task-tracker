import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { FaSketch } from "react-icons/fa";

function App() {
  const [showAddTasks, setShowAddTasks] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()  
  }, [])

  // Fetch tasks

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:8000/tasks')

    const data = await res.json()
    
    return data
  }
 

  // Delete task

  const deleteTasks = async (id) => {
    await fetch(`http://localhost:8000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task,  reminder:!task.reminder } : task))
  }

  // Add task

  const addTask = async (task) => {
    const res = await fetch('http://localhost:8000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    setTasks([...tasks, data])

    // const id = Math.floor(Math.random() * 10000 + 1)
    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask])
  }
 

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded-md">
      <Header onShow={() => setShowAddTasks(!showAddTasks)}  showAddTasks={showAddTasks}/>
      {showAddTasks && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? 
      ( <Tasks tasks={tasks} onDelete={deleteTasks} onToggle={toggleReminder}/> 
      ) : <div className='text-center text-lg'>No tasks</div> } 
    </div>
  ); 
}

export default App;
