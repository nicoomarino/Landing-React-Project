import React from 'react'
import styles from './AboutUs.module.css'

const AboutUs = () => {
    return (
        <div className={styles.aboutMainContainer}>
            <p className={styles.aboutTitle}>THE TEAM</p>
            <p className={styles.aboutSubtitle}><b>We make</b> magic
                happen <b>every day</b></p>
            <div className={styles.aboutSubContainer}>
                <div className={styles.eachContainer1}>
                    <img className={styles.image1} src="src/imaicons/ceo.jpeg" alt="ceo" />
                    <p className={styles.worker}>John Green</p>
                    <p className={styles.candidateWork}>CEO & Head of product</p>
                </div>
                <div className={styles.eachContainer2}>
                    <img className={styles.image2} src="src/imaicons/cfo.jpeg" alt="" />
                    <p className={styles.worker}>Mary Portman</p>
                    <p className={styles.candidateWork}>CFO</p>
                </div>
                <div className={styles.eachContainer3}>
                    <img className={styles.image3} src="src/imaicons/leadDesigner.jpeg" alt="" />
                    <p className={styles.worker}>Ryan Lorde</p>
                    <p className={styles.candidateWork}>Lead designer</p>
                </div>
            </div>
            <button className={styles.aboutBtn}>More about us </button>
        </div>
    )
}

export default AboutUs