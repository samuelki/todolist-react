import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import { TodoProvider } from './components/TodoProvider';

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <h1>To Do List</h1>
        <TodoAdd />
        <TodoList />
        <Footer />
      </div>
    </TodoProvider>
  );
}

export default App;
