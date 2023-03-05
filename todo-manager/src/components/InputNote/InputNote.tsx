import './InputNote.css'

export default function InputNote() {
  return (
    <div className="inputTodo">
        <input type="text"  className='noteInput' placeholder='Note'/>
        <div className='addNote'>+</div>
    </div>
  )
}
