import TodoList from './components/TodoList'
import Preferences from './components/Preferences';

const App = () => {
  return (
    <div className='  dark:bg-gray-800 dark:text-white bg-gray-100 text-gray-900' >
      <TodoList></TodoList>
      <Preferences></Preferences>
    </div>
  )
}

export default App
