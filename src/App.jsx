
import './App.css'
import AddNewTodo from './components/AddNewTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
    <h1 className='text-5xl font-semibold underline text-blue-950 mb-20'>Redux-Toolkit Todos</h1>
    <AddNewTodo/>
    <Todos/>
    </>
  )
}

export default App
