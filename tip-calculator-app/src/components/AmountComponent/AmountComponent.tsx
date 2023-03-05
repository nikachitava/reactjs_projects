import './AmountComponent.css'

export default function AmountComponent(props: {tipAmount: number, header: string}) {
  return (
    <div className="amountContainer">
        <div className="text">
            <h3>{props.header}</h3>
            <span>/ person</span>
        </div>
        <div className="amount">
            {props.tipAmount ? <p>${props.tipAmount.toFixed(2)}</p> : <p>$0.00</p>}
        </div>
    </div>
  )
}
