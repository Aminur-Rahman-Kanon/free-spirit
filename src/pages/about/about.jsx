import React from 'react';
import styles from './about.module.css';
import me from '../../assets/me.jpeg'

const About = () => {
  return (
    <div className={styles.aboutContainer}>
        <h2 className={styles.aboutH2}>About me</h2>
        <div className={styles.meContainer}>
            <img src={me} className={styles.me}/>
        </div>
        <p className={styles.aboutP}>Hi</p>
        
        <p className={styles.aboutP}>
            My previous name Md Aminur Rahman and recent name is Kanon Sarker and I am trying to be a practical hindu.
        </p>

        <p className={styles.aboutP}>
            After twenty some odd years of being a Muslim my faith broke down in 2013. I could no longer sustain belief. It seemed to me the deeper I dug for truth in my beliefs the shakier they became. In contrast, the deeper I dug for logic the more profound it became.
        </p>

        <p className={styles.aboutP}>
            Having had faith I still respect and care for those who remain in their faith. Having lost it I am interested in finding evidence based truth. I want to discover and communicate the subtleties of why some believe, some do not and some change their minds.
        </p>
    </div>
  )
}

export default About;
