import Button from "./Button"

const Header = ({ title }) => {

const onClick = () => {
    console.log('Click')
}

  return (
    <header className="flex justify-between items-center pb-4">
        <h1 className='text-xl font-semibold'>Task tracker</h1>
        <Button text='Add' onClick={onClick} />
    </header>
  )
}

export default Header