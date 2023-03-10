import './TodoComponent.css'
import bin from '../../assets/images/bin.svg'
import checked_box from '../../assets/images/checked_box.svg'
import unchecked_box from '../../assets/images/unchecked_box.svg'
import { Itodo } from '../../data/Itodo'

export default function TodoComponent(props: Itodo) {

    return (
        <li key={props.id} className="todo_list">
            <div className="left_side">
                <p className='name'>{props.task}</p>
                <p className='time_todo'>{props.time}</p>
            </div>
            <div className="right_side">
                {props.complete ? 
                    <img src={checked_box} alt="checked_box" onClick={()=> props.handleComplete(props.id)}/> 
                : 
                    <img src={unchecked_box} alt="unchecked_box"  onClick={()=> props.handleComplete(props.id)}/>}

                <img src={bin} alt="recyle_bin" onClick={()=> props.handleDeteleTask(props.id)}/>
            </div>
        </li>
    )
}
