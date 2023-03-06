import './App.css';
import InputNote from './components/InputNote/InputNote';
import TodoComponent from './components/TodoComponent/TodoComponent';
import { NOTES } from './data/data.js'
import { setDate } from './data/day.js'
import ClockComponent from './components/ClockComponent/clockComponent';

function App() {
  const handleNote = (e: any) => {
    console.log(e.target.value)
  }

  return (
    <div className="todoContainer">
      <div className="display_theme">
        <div className="display">
          <p className="date">{setDate()}</p>
          <ClockComponent/>
        </div>
      </div>
      <div className="todo_panel">
        <InputNote handleNote={handleNote}/>
        <div className="todo_list_container">
            {NOTES.map(note => <TodoComponent 
              name={note.noteTitle}
              time={note.timeTodo}
              check={note.check}
            />)}
        </div>
      </div>
    </div>
  );
}

export default App;
