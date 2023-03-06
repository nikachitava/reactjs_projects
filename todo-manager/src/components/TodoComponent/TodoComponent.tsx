import './TodoComponent.css'
import bin from '../../assets/images/bin.svg'
import checked_box from '../../assets/images/checked_box.svg'
import unchecked_box from '../../assets/images/unchecked_box.svg'

export default function TodoComponent(props: {
    name: string;
    time: string;
    check: number;
  }) {
  return (
    <div className="todo_list">
        <div className="left_side">
            <p className='name'>{props.name}</p>
            <p className='time_todo'>{props.time}</p>
        </div>
        <div className="right_side">
            {props.check ? <img src={checked_box} alt="checked_box" /> : <img src={unchecked_box} alt="unchecked_box" />}
            <img src={bin} alt="recyle_bin" />
        </div>
    </div>
  )
}
