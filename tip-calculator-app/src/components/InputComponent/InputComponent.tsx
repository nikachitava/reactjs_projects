import './InputComponent.css'
import iconDollar from '../../assets/images/icon-dollar.svg'

export default function InputComponent(props: {
      title: string, 
      handleInput: (e: any) => void,
      error: number | null,
    }) {
    return (
      <div className="inputContainer">
        <div className="header">
          <h4 className='title'>{props.title}</h4>
          {props.error ? <p className='error'>Can't be Zero</p> : null}
        </div>
        <div className="inputHolder">
          <img src={iconDollar} alt="dollar"/>
          <input type='number' className='inputPlace' placeholder="0" onChange={props.handleInput}/>
        </div>
      </div>
    )
}
