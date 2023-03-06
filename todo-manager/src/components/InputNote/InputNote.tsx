import { NOTES } from '../../data/data'
import './InputNote.css'

export default function InputNote(props: {handleNote: (e: any) => void}) {
  console.log(NOTES)
  return (
    <div className="inputTodo">
        <input type="text"  className='noteInput' placeholder='Note' onChange={props.handleNote}/>
        <div className='addNote' onClick={()=> 
          NOTES.push({
            noteID: 5,
            noteTitle: "sleep",
            timeTodo: "5pm",
            check: 0
          })
        }>+</div>
    </div>
  )
}
