import React, { useState } from 'react';
import styles from "./styles.module.css";

export default function Card(props) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
    
  };
  const btn="more details"
  const btn2="less details"

  return (
    <div className={styles.card}>
      <div className={styles["card-image"]}>
        <img src={props.imageUrl} alt="profile-image" />
      </div>
      <p className={styles.name}>{props.name}</p>
      <p>{props.description}</p>
      <p>{props.mobilite}</p>
      <p>{props.disponibilité}</p>
      {showDetails && (
        <>
        <hr className={styles.hr}/>
          <p >{props.age}</p>
          <p >{props.location}</p>
          <p >{props.interests.join(', ')}</p>
        </>
      )}
      <button className={styles["see-more-btn"]} onClick={toggleDetails}>{!showDetails?btn:btn2}</button>
    </div>
  );
}








