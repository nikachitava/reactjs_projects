import './TipComponent.css'

export default function TipComponent(props: {title: string, setTipValue: (e: any) => void}) {

    let tips = [5, 10, 15, 25, 50]
    return (
        <div className="tipContainer">
            <h4 className='title'>{props.title}</h4>
            <div className='tipsButton'>
                {tips.map((tip: number)=> 
                    <button 
                        className='tipButton'
                        value={tip} 
                        onClick={props.setTipValue}
                    >{tip}%
                </button>
                )}
            <input className='tipInput' type="text" placeholder='Custom'/>
            </div>
        </div>
    )
}
