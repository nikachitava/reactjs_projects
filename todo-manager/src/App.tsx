import './App.css';
import InputNote from './components/InputNote/InputNote';
import { setDate } from './data/day'
import ClockComponent from './components/ClockComponent/clockComponent';

function App() {
    return (
        <div className="todoContainer">
            <div className="display_theme">
                <div className="display">
                    <p className="date">{setDate()}</p>
                    <ClockComponent/>
                </div>
            </div>
            <div className="todo_panel">
                <InputNote />
            </div>
        </div>
    );
}

export default App;
