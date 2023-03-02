import styles from './ThankComponent.module.css';
import ThankYouIcon from '../../assets/images/illustration-thank-you.svg'

export default function ThankComponent(props: {rate: number}) {
    return (
        <div className={styles.ThankCardContainer}>
          <img className='thanks_icon' src={ThankYouIcon} alt='thanks_icon'/>
          <p className={styles.yourRate}>You selected {props.rate} out of 5</p>
          <h1 className={styles.title}>Thank You!</h1>
          <p className={styles.description}>We appreciate you taking the time to give a rating. 
            If you ever need more support, don’t hesitate to get in touch!
          </p>
        </div> 
    );
}
