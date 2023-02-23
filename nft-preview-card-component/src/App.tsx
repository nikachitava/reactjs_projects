import './App.css';
import equilibrium from './assets/images/image-equilibrium.jpg'
import ethIcon from './assets/images/icon-ethereum.svg'
import clockIcon from './assets/images/icon-clock.svg'
import avatar from './assets/images/image-avatar.png'

function App() {
  return (
    <div className="cardContainer">
      <img className='equilibrium' src={equilibrium} alt='eth-icon'/>
      
      <h1 className='title'>Equilibrium #3429</h1>

      <p className='description'>Our Equilibrium collection promotes balance and calm.</p>

      <div className='wrapper'>
        <div className='nft_price'>
          <img className='eth_icon' src={ethIcon} alt='eth_icon'/>
          <p className='price'>0.041ETH</p>
        </div>
        <div className='remain_time'>
          <img src={clockIcon} alt='clock_icon'/>
          <p className='days'>3 days left</p>
        </div>
      </div>

      <hr/>

      <div className='creatorWrapper'>
        <img className='avatar' src={avatar} alt='avatar'/>
        <p className='role'>Creation of <span className='name'>Jules Wyvern</span></p>
      </div>

    </div>
  );
}

export default App;
