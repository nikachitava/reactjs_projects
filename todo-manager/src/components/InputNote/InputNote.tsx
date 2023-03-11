import './InputNote.css'
import { useState } from 'react';
import { Itodo } from '../../data/Itodo';
import TodoComponent from '../TodoComponent/TodoComponent';


export default function InputNote() {
    const [input, setInput] = useState('')
    const [todoList, setTodoList] = useState<Itodo[]>([]);
    
    const handleClick = () => {
        if(input !== '') {
            const id = todoList.length;
            const date = new Date();
            const Time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

            

            setTodoList([
                ...todoList,
                {
                    id: id,
                    task: input,
                    time: `${date.toDateString()} ${Time}`,
                    complete: false,
                    handleComplete: handleComplete,
                    handleDeteleTask: handleDeteleTask 
                }
            ])
            setInput("");
        } else {
            alert("type something")
        }
    }

    const handleComplete = (id: number) => {
        let updatedTask = todoList.map(task=> {
            if(task.id === id) {
                return ({...task, complete: !task.complete})
            }
            return task
        })
        setTodoList(updatedTask)
        console.log('checked: ', id)
    }

    const handleDeteleTask = (id: number) => {
        let reducedTodo = [...todoList]
        reducedTodo.splice(id)
        setTodoList(reducedTodo)
        console.log('deleted id: ', id)
    }

    return (
        <>
            <div className="inputTodo">
                <input 
                    type="text" 
                    value={input}
                    className='noteInput' 
                    placeholder='Note'
                    onInput={(e: any)=> setInput(e.target.value)}
                />
                <div 
                    className='addNote'
                    onClick={()=> handleClick()}
                >+</div>
            </div>
            <ul className="todo_list_container">
                {todoList.length ? todoList.map((todo)=> 
                    <TodoComponent 
                        id={todo.id}
                        task={todo.task}
                        time={todo.time}
                        complete={todo.complete}
                        handleComplete={handleComplete}
                        handleDeteleTask={handleDeteleTask}
                    />) : 
                    null} 
            </ul>
        </>
    )
}
