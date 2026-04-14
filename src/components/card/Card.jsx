import React from 'react';
import styles from './card.module.css';
import Image from 'next/image';
import Link from 'next/link';
const Card = () => {
    return (
        <div className={styles.container}>
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt=''className={styles.image} fill/>
                    </div>
                    <div className={styles.textContainer}>
                        <div className={styles.detail}>
                            <span className={styles.date}>
                                11.02.2026-
                            </span>
                            <span className={styles.category}>
                                CULTURE
                            </span>
                        </div>
                        <Link href="/">
                        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elie.</h1>
                        </Link>
                        <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit mollitia, tempora odit hic dolore ut dignissimos minus corrupti libero, iusto vero molestias officiis nisi ipsam, accusantium culpa iste deleniti maiores.</p>
                        <Link href="/" className={styles.link}>Read More</Link>
                    </div>
            </div>
    );
}

export default Card;
