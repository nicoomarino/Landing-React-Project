import React, { useState } from 'react';
import styles from './navBar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {


    const  [isOpen, setisOpen] = useState(false)

    return (
        <header className={styles.navContainer} >
            <nav>
                <div className={styles.logoDiv}>
                    <img src="/imaicons/logo.png" alt="Logo" />
                    <h1>NexMedia</h1>
                </div>
                <ul className={styles.list}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                    <div className={styles.Ricons}>
                        <img src="/imaicons/facebook.png" alt="" />
                        <img src="/imaicons/instagram.png" alt="" />
                        <img src="/imaicons/linkedin.png" alt="" />
                    </div>
                    <button onClick={()=> setisOpen(!isOpen)} className={styles.navCloseBtn}>
                        <FaTimes />
                    </button>
                </ul>
            </nav>
            <button  className={styles.navBtn}>
                <FaBars />
            </button>
        </header>
    );
};

export default NavBar;