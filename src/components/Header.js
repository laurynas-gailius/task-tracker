import Button from "./Button"


const Header = ({ onShow, showAddTasks }) => {


  return (
    <header className="flex justify-between items-center pb-4">
        <h1 className='text-xl font-semibold'>Task tracker</h1>
        <Button onClick={onShow} text={showAddTasks ? 'Close' : 'Add'} color={showAddTasks ? 'bg-red-500' : 'bg-green-500'}/>
    </header>
  )
}

export default Header