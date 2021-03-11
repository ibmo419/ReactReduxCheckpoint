import './App.css';
import AddTask from './Component/AddTask';
import ListTask from './Component/ListTask';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="todo-app m-4">
      <AddTask/>
      <ListTask/>
    </div>
  );
}

export default App;
