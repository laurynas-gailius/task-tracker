import { useState } from "react"
const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('please add task')
            return
        }

        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)

    } 

  return (
    <form onSubmit={onSubmit}>
        <div className="flex flex-col"> 
            <label className="text-sm font-semibold mb-2">Task</label>
            <input type="text" placeholder="Task name" value={text} onChange={(e) => setText(e.target.value)} className="border border-slate-300 rounded-lg p-4 mb-5" />
        </div>
        <div className="flex flex-col">
            <label className="text-sm font-semibold mb-2">Date n Time</label>
            <input type="text" placeholder="Select" value={day} onChange={(e) => setDay(e.target.value)} className="border border-slate-300 rounded-lg p-4 mb-5" />
        </div>
        <div className=''>
            <input type='checkbox' value={reminder} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} className="mb-5"></input>
            <label className="ml-2">Remind me</label>
        </div>

        <input type="submit" value="Save task" className='py-3 mb-4 w-full text-white rounded-full bg-slate-900 text-sm font-medium focus:ring-4 focus:ring-slate-300 hover:bg-slate-700'></input>
    </form>
  )
}

export default AddTask