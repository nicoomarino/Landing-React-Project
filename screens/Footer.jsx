import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footerMainContainer}>
            <img src="/imaicons/logo.png" alt="logo" />
            <div className={styles.col1}>
                <p><b>See us in person</b></p>
                <p>Cabildo,Buenos Aires <br />CABA,Argentina</p>
            </div>
            <div className={styles.col2}>
                <p><b>Contact Us</b></p>
                <p>email@mailservice.com<br />(555) 555-5555</p>
            </div>
            <div className={styles.line}></div>
        </div>
    )
}

export default Footer