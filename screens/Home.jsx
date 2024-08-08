import React from 'react'
import styles from './Home.module.css'

function Home() {


    return (
        <main id = {styles.homeanchor}className={styles.homeMainContainer}>
            <div className={styles.leftContainer}>
                <i>Digital Agency</i>
                <p className={styles.brandTitle}>Leading <b>digital</b><br /> <b>agency</b> dedicated to creating<br /> unforgettable <b>experiences</b> for<br /> your customers</p>
                <div className={styles.btnDiv}>
                    <a href="#"><button className={styles.homeBtn1}>See our work</button></a>
                    <a href="#"><button className={styles.homeBtn2}>Contact us</button></a>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <img src="src/imaicons/home-img.jpeg" alt="home-image" />
            </div>
        </main>
    )
}

export default Home
