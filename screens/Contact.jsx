import React from 'react'
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <form className={styles.contactMainContainer} action="">
            <p className={styles.contactTitle}>Contact us</p>
            <h2 className={styles.contactsTitle}>Want <b>more info?</b></h2>
            <div className={styles.inputRow}>
                <div className={styles.inputCol}>
                    <label className={styles.label} htmlFor="">Name:</label>
                    <input className={styles.mainInputs} type="text" />
                </div>
                <div className={styles.inputCol}>
                    <label className={styles.label} htmlFor="">E-Mail:</label>
                    <input className={styles.mainInputs} type="email" />
                </div>
            </div>
            <label className={styles.label} htmlFor="">Message:</label>
            <textarea className={styles.textarea} name="" id=""></textarea>
            <button className={styles.contactBtn}>Contact us</button>
        </form>
    )
}

export default Contact