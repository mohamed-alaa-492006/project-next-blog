import styles from './featured.module.css';
import Image from 'next/image';
const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey,enginer mohamed hassan</b>Discover my stories and creative ideas
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="feater1" className={styles.image} fill/>
                </div>
                 <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis.</h1>
                    <p className={styles.postdesc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora dolorem amet itaque consectetur eos architecto perspiciatis ut praesentium ducimus, mollitia, dolore repellendus temporibus recusandae laudantium, dolor officiis autem? Maiores, molestiae!</p>
                    <button className={styles.btnRead}>Read More</button>      
                </div>

            </div>
        </div>
    );
}

export default Featured;
