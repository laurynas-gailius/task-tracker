import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTasks, setShowAddTasks] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors appointment',
      day: 'Feb 5th',
      reminder: true
    },
    {
      id: 2,
      text: 'Haircut',
      day: 'Feb 6th',
      reminder: true
    },
    {
      id: 3,
      text: 'Gym',
      day: 'Feb 7th',
      reminder: true
    },
  ])

  // Delete task

  const deleteTasks = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task,  reminder:!task.reminder } : task))
  }

  // Add task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1)
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }
 

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded-md">
      <Header onShow={() => setShowAddTasks(!showAddTasks)} />
      {showAddTasks && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? 
      ( <Tasks tasks={tasks} onDelete={deleteTasks} onToggle={toggleReminder}/> 
      ) : <div className='text-center text-lg'>No tasks</div> } 
    </div>
  ); 
}

export default App;
