import React from 'react'
import styles from './MoreInfo.module.css'
import ReactCurvedText from 'react-curved-text'



const MoreInfo = () => {
    return (
        <div className={styles.moreInfoMainContainer}>
            {/* <div>
        <img src="/imaicons/workTeam.jpeg" alt="imageWorkTeam" />
      </div> */}
            <div className={styles.middleContainer}>
                <span className={styles.lineV}></span>
                <div className={styles.moreInfoMContainer}>
                    <h2 className={styles.circleL}>LM</h2>
                    <div className={styles.txt}>
                        <ReactCurvedText className={styles.box}
                            width={300}
                            height={300}
                            cx={150}
                            cy={150}
                            rx={100}
                            ry={100}
                            startOffset={50}
                            reversed={false}
                            text={'- UX Design - E-Commerce - Branding - User Interface -'}
                            textProps={{ "style": { "fontSize": 24 } }}
                            textPathProps={{ "fill": "#ffffff" }}
                            tspanProps={null}
                            ellipseProps={null}
                            svgProps={null} />
                    </div>

                </div>
                <p className={styles.text}>You need innovative <b>digital designers</b> , and that's what we do. We are a team of  digital designers  who create meaningful, transformative experiences. We specialize in <b> UX, UI</b> and <b>technical innovation</b>, designing and building digital experiences for the real world.</p>
                <span className={styles.lineV}></span>
            </div>
            <div className={styles.circle}></div>
        </div>
    )
}

export default MoreInfo