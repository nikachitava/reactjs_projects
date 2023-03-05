import { useEffect, useState } from 'react'
import './App.css'
import iconPerson from './assets/images/icon-person.svg'
import InputComponent from './components/InputComponent/InputComponent'
import TipComponent from './components/TipComponent/TipComponent'
import AmountComponent from './components/AmountComponent/AmountComponent'

function App() {
  const [bill, setBill] = useState("0")
  const [people, setPeople] = useState("0")
  const [tip, setTip] = useState("0")
  const [tipAmount, setTipAmount] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(()=> {
    let Bill = parseFloat(bill)
    let People = parseFloat(people)
    let Tip = parseFloat(tip)

    let amount = (Bill * Tip / 100 / People)
    setTipAmount(amount)
    setTotal(Bill / People + amount)
    
  },[people])

  const billSet = (e: any) => {
    setBill(e.target.value)
  }

  const peopleSet = (e: any) => {
    setPeople(e.target.value)
  }

  const setTipValue = (e: any) => {
    setTip(e.target.value)
  }

  const handleReset = ()=> {
    setBill("0")
    setPeople("0")
    setTip("0")
    setTipAmount(0)
    setTotal(0)
  }
  
  return (
    <div className="container">
      <div className="form_side">
        <InputComponent 
          title='Bill'
          handleInput = {billSet}
          error={null}
        />

        <TipComponent
          title='Select tip %'
          setTipValue={setTipValue}
        />

        <InputComponent 
          title='Number of people'
          handleInput = {peopleSet}
          error={people == '0' ? 1 : null}
        />
      </div>

      <div className="display_side">
        <AmountComponent
          header="Tip Amount"
          tipAmount={tipAmount}
        />

        <AmountComponent
          header="Total"
          tipAmount={total}
        />
        <button className='resetButton'
          onClick={handleReset} 
          >RESET</button>
      </div>
      
    </div>
  );
}

export default App;
