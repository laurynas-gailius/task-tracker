import { FaTimes } from 'react-icons/fa' 

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className='my-2 p-4 bg-slate-100 rounded-md'>
        <h1 className="flex items-center justify-between text-lg font-semibold">{task.text} 
        <FaTimes 
        className='text-slate-500 cursor-pointer hover:text-slate-600'
        onClick={() => onDelete(task.id)}
        />
        </h1>
        <p>{task.day}</p>
        <div className='pt-2'>
          <input type='checkbox' onClick={() => onToggle(task.id)} id={task.id} className='mr-2' checked={task.reminder ? 'checked' : ''}></input>
          <label htmlFor={task.id}>Remind me</label>
        </div>
    </div>
  )
}

export default Task 