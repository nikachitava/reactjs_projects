import styles from './RatingComponent.module.css';
import starIcon from '../../assets/images/icon-star.svg'
import { useState } from 'react';
import ThankComponent from '../ThankComponent/ThankComponent';

export default function RatingComponent() {
  
  const [selectedRating, setSelectedRating] = useState(0)
  const [isSubmited, setIsSubmited] = useState(false)


  return isSubmited ? (
      <ThankComponent rate={selectedRating}/>) 
    :
    
    (<div className={styles.cardContainer}>
      <img className={styles.icon} src={starIcon} alt='starIcon'/>

      <h1 className={styles.title}>How did we do?</h1>

      <p className={styles.description}>
        Please let us know how we did with your support request. 
        All feedback is appreciated to help us improve our offering!
      </p>

      <div className={styles.buttons_wrapper}>
        {[1,2,3,4,5].map((item) => (
          <button 
            onClick={()=> {setSelectedRating(item)}}
            className={styles.rateButton} 
          >{item}</button>
        ))}
      </div>

      <div >
        <button className={styles.submitBtn} onClick={()=> {
          setIsSubmited(!isSubmited)
        }}>Submit</button>
      </div>
    </div> 
  );
}
