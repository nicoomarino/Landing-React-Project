import React from 'react'
import styles from './Services.module.css'

const Services = () => {
    return (
        <div className={styles.background}>
            <div className={styles.mainContainerServices}>
                <div className={styles.subContainerServices}>
                    <img src="src/imaicons/dice.png" alt="dice" />
                    <h2 className={styles.titleServices}>UX Design</h2>
                    <ul className={styles.listServices}>
                        <li>UI design</li>
                        <li>Wireframe design</li>
                        <li>eCommerce</li>
                        <li>Frontend development</li>
                        <li>Information architecture</li>
                    </ul>
                </div>
                <div className={styles.subContainerServices}>
                    <img src="src/imaicons/tag.png" alt="" />
                    <h2 className={styles.titleServices}>Branding</h2>
                    <ul className={styles.listServices}>
                        <li>UI design</li>
                        <li>Wireframe design</li>
                        <li>eCommerce</li>
                        <li>Frontend development</li>
                        <li>Information architecture</li>
                    </ul>
                </div>
                <div className={styles.subContainerServices}>
                    <img src="src/imaicons/world.png" alt="" />
                    <h2 className={styles.titleServices}>Strategy</h2>
                    <ul className={styles.listServices}>
                        <li>UI design</li>
                        <li>Wireframe design</li>
                        <li>eCommerce</li>
                        <li>Frontend development</li>
                        <li>Information architecture</li>
                    </ul>
                </div>
            </div>
            <a href="#">
                <div className={styles.containerBtn}>
                    <button className={styles.btnLMore}>Learn more</button>
                </div>
            </a>
        </div>
    )
}

export default Services