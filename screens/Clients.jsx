import React from 'react'
import styles from './Clients.module.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const listText = [
    {
        id: 1,
        text: "I don't know what we did before discovering LogMedia. Every project is a masterpiece!",
        sText: "James London, CEO @ Mercado Libre"
    },
    {
        id: 2,
        text: "Amazing service. Can´t wait to find out what´s next!",
        sText: "James London, CEO @ Ober",
    }
]

const Clients = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <>
            <div className={styles.clientsMainContainer}>
                <i className={styles.title}>OUR CLIENTS</i>
                <h2 className={styles.subTitle}><b>We´ve got some</b><br /> amazing clients</h2>
                <div className={styles.clientsSubContainer}>
                    <img src="https://irp.cdn-website.com/md/dmtmpl/4bfca5e8-8b5b-401d-a39e-ad0621a9f362/dms3rep/multi/rapple.png" alt="" />
                    <img src="https://irp.cdn-website.com/md/dmtmpl/4bfca5e8-8b5b-401d-a39e-ad0621a9f362/dms3rep/multi/ober.png" alt="" />
                    <img src="/imaicons/mercadolibre.png" alt="" />
                    <img src="/imaicons/kfc.webp" alt="" />
                    <img src="https://irp.cdn-website.com/md/dmtmpl/4bfca5e8-8b5b-401d-a39e-ad0621a9f362/dms3rep/multi/microchip.png" alt="" />
                </div>
                <button className={styles.clientsBtn}>Learn more</button>

            </div>

            <div className={styles.sliderContainer}>
                <Slider {...settings}>
                    {listText.map(item => (
                        <div key={item.id} className={styles.slide}>
                            <p className={styles.text}>{item.text}</p>
                            <p className={styles.sText}>{item.sText}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default Clients