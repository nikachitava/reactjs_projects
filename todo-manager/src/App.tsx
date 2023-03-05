import './App.css';
import InputNote from './components/InputNote/InputNote';
import TodoComponent from './components/TodoComponent/TodoComponent';

function App() {
  return (
    <div className="todoContainer">
      <div className="display_theme">
        <div className="display">
          <p className="date">Thur 9</p>
          <p className="time">6:23 AM</p>
        </div>
      </div>
      <div className="todo_panel">
        <InputNote/>
        <div className="todo_list_container">
            <TodoComponent/>
            <TodoComponent/>
        </div>
      </div>
    </div>
  );
}

export default App;
