import React from 'react';
import styles from './contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
        <h3 className={styles.contactH3}>Should you have any discussion related to religion or need help for guidelines of finding the truth ? then lets talk</h3>
        <div className={styles.contactIcon}>
            <div className={styles.contact}>
                <FontAwesomeIcon icon={faFacebookSquare} className={`${styles.icon} ${styles.fb}`}/>
                <a href='https://www.facebook.com/kanon.daemon' target='_blank' className={styles.fbLink}>Kanon Daemon</a>
            </div>
            <div className={styles.contact}>
                <FontAwesomeIcon icon={faEnvelope} className={`${styles.icon} ${styles.gmail}`}/>
                <span className={styles.label}>Gmail:</span>
                <p className={styles.contactDetails}>kanon754@gmail.com</p>
            </div>
            <div className={styles.contact}>
                <FontAwesomeIcon icon={faPhone} className={`${styles.icon} ${styles.phone}`}/>
                <span className={styles.label}>Phone:</span>
                <p className={styles.contactDetails}>+447510268021</p>
            </div>
        </div>

        <div className={styles.form}>
            <div className={styles.group}>
                <h4 className={styles.formlabel}>Name</h4>
                <input type='text' className={styles.input} placeholder='Name'/>
            </div>

            <div className={styles.group}>
                <h4 className={styles.formlabel}>Email</h4>
                <input type='text' className={styles.input} placeholder='Name'/>
            </div>

            <div className={styles.group}>
                <h4 className={styles.formlabel}>Comments</h4>
                <textarea className={styles.textarea} placeholder='Comments'/>
            </div>

            <button className={styles.submitBtn}>Submit</button>
        </div>
    </div>
  )
}

export default Contact;
