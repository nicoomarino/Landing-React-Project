import React from 'react'
import styles from './OurWork.module.css';

const works = [
    {
        id: 1,
        image: "https://irp.cdn-website.com/md/dmtmpl/4bfca5e8-8b5b-401d-a39e-ad0621a9f362/dms3rep/multi/Project_Desktop_SOCIO.jpg",
    },
    {
        id: 2,
        image: "https://irp.cdn-website.com/md/dmtmpl/4bfca5e8-8b5b-401d-a39e-ad0621a9f362/dms3rep/multi/Project_Desktop_eee+hotel.jpg",
    },
    {
        id: 3,
        image: "https://irp.cdn-website.com/md/dmtmpl/4bfca5e8-8b5b-401d-a39e-ad0621a9f362/dms3rep/multi/Project_Desktop_HEARTFELL.jpg",
    },
    {
        id: 4,
        image: "https://irp.cdn-website.com/md/dmtmpl/4bfca5e8-8b5b-401d-a39e-ad0621a9f362/dms3rep/multi/Project_desktop_Plan.jpg",
    },
    {
        id: 5,
        image: "https://irp.cdn-website.com/md/dmtmpl/4bfca5e8-8b5b-401d-a39e-ad0621a9f362/dms3rep/multi/adrian+tello.jpg",
    },
    {
        id: 6,
        image: "https://irp.cdn-website.com/md/dmtmpl/4bfca5e8-8b5b-401d-a39e-ad0621a9f362/dms3rep/multi/Project_Deskto_ARIA+SHELL.jpg",
    },

];


const OurWork = () => {


    return (
        <>
            <p className={styles.workTitle}>OUR WORK</p>
            <h2 className={styles.workSubTitle}><b>Latest</b> & Greatest </h2>
            <div className={styles.workMainContainer}>
                {works.map((work) => (
                    <img className={styles.image} key={work.id} src={work.image} alt={`Work ${work.id}`} />
                ))}
            </div>
        </>
    )
}

export default OurWork