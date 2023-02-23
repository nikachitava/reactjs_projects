import './App.css';
import equilibrium from './assets/images/image-equilibrium.jpg'
import ethIcon from './assets/images/icon-ethereum.svg'
import clockIcon from './assets/images/icon-clock.svg'
import avatar from './assets/images/image-avatar.png'

function App() {
  return (
    <div className="cardContainer">
      <div className='imgContainer'>
        <img className='equilibrium' src={equilibrium} alt='eth-icon'/>
        <div className='hoverEffect'>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24 9C14 9 5.46 15.22 2 24C5.46 32.78 14 39 24 39C34.01 39 42.54 32.78 46 24C42.54 15.22 34.01 9 24 9ZM24 34C18.48 34 14 29.52 14 24C14 18.48 18.48 14 24 14C29.52 14 34 18.48 34 24C34 29.52 29.52 34 24 34ZM18 24C18 20.69 20.69 18 24 18C27.31 18 30 20.69 30 24C30 27.31 27.31 30 24 30C20.69 30 18 27.31 18 24Z" fill="white"/>
          </svg>
        </div>
      </div>

      
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
