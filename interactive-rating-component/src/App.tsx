import styles from './App.module.css';
import starIcon from './assets/images/icon-star.svg'

function App() {
  return (
    <div className={styles.cardContainer}>
      <img src={starIcon} alt='starIcon'/>

      <h1 className={styles.title}>How did we do?</h1>

      <p className={styles.description}>
        Please let us know how we did with your support request. 
        All feedback is appreciated to help us improve our offering!
      </p>

      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>Submit</button>
    </div>
  );
}

export default App;
