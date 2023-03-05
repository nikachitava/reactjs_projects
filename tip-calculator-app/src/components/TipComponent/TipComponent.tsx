import './TipComponent.css'

export default function TipComponent(props: {title: string, setTipValue: (e: any) => void}) {

    return (
        <div className="tipContainer">
            <h4 className='title'>{props.title}</h4>
            <div className='tipsButton'>
                {[5, 10, 15, 25, 50].map((tip: number)=> 
                    <button 
                        className='tipButton'
                        value={tip} 
                        onClick={props.setTipValue}
                        key={tip}
                    >{tip}%
                </button>
                )}
                <input 
                    className='tipInput' 
                    type="text" 
                    placeholder='Custom'
                    onChange={props.setTipValue}
                />
            </div>
        </div>
    )
}
