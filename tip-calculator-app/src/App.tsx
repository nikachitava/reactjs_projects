import { useEffect, useState } from 'react'
import './App.css'
import iconPerson from './assets/images/icon-person.svg'
import InputComponent from './components/InputComponent/InputComponent'
import TipComponent from './components/TipComponent/TipComponent'

/* must change input type in number and usesate types also */

function App() {
  const [bill, setBill] = useState<string>('0')
  const [people, setPeople] = useState<string>('0')
  const [tip, setTip] = useState<string>('0')
  const [tipAmount, setTipAmount] = useState(0)

  useEffect(()=> {
    let Bill = parseInt(bill)
    let People = parseInt(people)
    let Tip = parseInt(tip)
    let amount = Bill / People * Tip / 100
    setTipAmount(amount)
    console.log("people changed")
  },[people])

  const billSet = (e: any) => {
    setBill(e.target.value)
    // console.log(e.target.value)
  }

  const peopleSet = (e: any) => {
    setPeople(e.target.value)
    // console.log(e.target.value)
  }

  const setTipValue = (e: any) => {
    setTip(e.target.value)
  }
  

  return (
    <div className="container">
      <div className="form_side">
        <InputComponent 
          title='Bill'
          inputFunction = {billSet}
        />

        <TipComponent
          title='Select tip %'
          setTipValue={setTipValue}
        />

        <InputComponent 
          title='Number of people'
          inputFunction = {peopleSet}
        />

        {/* <div className="tipContainer">
          <label>Select tip %</label>
          <button value={5} onClick={getTipValue}>5%</button>
          <button value={10} onClick={getTipValue}>10%</button> 
          <button value={15} onClick={getTipValue}>15%</button>
          <button value={25} onClick={getTipValue}>25%</button>
          <input type="text" placeholder='CUSTOM'/>
        </div>

        {<p>Tip % is {tip}</p>}

        <div className="inputContainer">
          <label>Number of people</label>
          <img src={iconPerson} alt="dollar"/>
          <input placeholder="5" onChange={(e)=> {
            setPeople(e.target.value)
          }}/>
        </div> */}

        {/* {<p>Bill is {people}</p>}  */}
      </div>

      <div className="display_side">
        <div className="wrapper">
          <div className="text">
            <h3>Tip amount</h3>
            <span>/ person</span>
          </div>
          <div className="amount">
            <p>{tipAmount}</p>
          </div>
        </div>

        <div className="wrapper">
          <div className="text">
            <h3>Total</h3>
            <span>/ person</span>
          </div>
          <div className="amount">
            <p>$32.23</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
