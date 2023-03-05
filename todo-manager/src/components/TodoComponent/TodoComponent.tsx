import './TodoComponent.css'
import bin from '../../assets/images/bin.svg'

export default function TodoComponent() {
  return (
    <div className="todo_list">
        <div className="left_side">
            <p className='name'>Dinner</p>
            <p className='time_todo'>Today at 8:00pm</p>
        </div>
        <div className="right_side">
            <input type="checkbox" className='check_box'/>
            <img src={bin} alt="recyle_bin" />
        </div>
    </div>
  )
}
