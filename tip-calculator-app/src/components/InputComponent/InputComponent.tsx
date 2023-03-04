import './InputComponent.css'
import iconDollar from '../../assets/images/icon-dollar.svg'

export default function InputComponent(props: {title: string, inputFunction: (e: any) => void}) {
    return (
      <div className="inputContainer">
        {/* <div className="header"> */}
          <h4 className='title'>{props.title}</h4>
        {/* </div> */}
        <div className="inputHolder">
          <img src={iconDollar} alt="dollar"/>
          <input className='inputPlace' placeholder="0" onChange={props.inputFunction}/>
        </div>
      </div>
    )
}
