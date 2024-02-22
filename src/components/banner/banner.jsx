import React from 'react';
import styles from './banner.module.css';
import homePageImg from '../../assets/homepage.jpg';

const Banner = () => {
  return (
    <div className={styles.introContainer}>
        <div className={styles.introImgContainer}>
            <img src={homePageImg} className={styles.introImg} />
        </div>
        <div className={styles.introDetailsContainer}>
            <h1 className={styles.introH1}>Free Spirit</h1>
            <h3 className={styles.introh3}>By Aminur Rahman</h3>
            <p className={styles.introSub}>Everyone has the right to freedom of thought</p>
        </div>
    </div>
  )
}

export default Banner;
