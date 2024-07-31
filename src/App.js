import './App.css';
import TodoList from './components/todoList/TodoList';
import ModalWindow from './components/UI/ModalWindow/ModalWindow';
import AddTodoForm from './components/AddTodoForm/AddTodoForm'
import ControlModule from './components/ControlModule/ControlModule';
function App() {
  return (
      <div className="container">
        
        <div className='separator'>
          <h1 className='mainTitle'>list of your tasks</h1>
        </div>
        <ControlModule />
        <TodoList />
        <ModalWindow>
          <AddTodoForm /> 
        </ModalWindow>
      </div>
  );
}

export default App;
