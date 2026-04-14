import Link from 'next/link';
import styles from './footer.module.css';
import Image from 'next/image';
const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.prand}>
                <div className={styles.logo}>
                    <Image src="/logo.png"  alt=''className={styles.imglog} width={37} height={37}/>
                    <h3 className={styles.logoTitle}>Lamablog</h3>
                </div>
                <div className={styles.descPrand}>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sequi necessitatibus vitae, eos officiis distinctio aliquid placeat aut modi voluptates minima .</p>
                </div>
                <div className={styles.prensocials}>
                    <Image src="/facebook.png" alt='facebook' width={18} height={18}/>
                    <Image src="/instagram.png" alt='instagram' width={18} height={18}/>
                    <Image src="/tiktok.png" alt='tiktok' width={18} height={18}/>
                    <Image src="/youtube.png" alt='youtube' width={18} height={18}/>
                </div>
            </div>
            <div className={styles.contact}>
                <div className={styles.links}>
                    <span className={styles.TitleLinks}>Links</span>
                    <Link href="/"className={styles.link}>Homepage</Link>
                    <Link href="/"className={styles.link}>Blog</Link>
                    <Link href="/"className={styles.link}>About</Link>
                    <Link href="/"className={styles.link}>Contact</Link>
                </div>
                <div className={styles.tags}>
                    <span className={styles.TitleTags}>Tags</span>
                    <Link href="/"className={styles.tage}>Style</Link>
                    <Link href="/"className={styles.tage}>Fashion</Link>
                    <Link href="/"className={styles.tage}>Coding</Link>
                    <Link href="/"className={styles.tage}>Travel</Link>
                </div>
                <div className={styles.Social}>
                    <span className={styles.TitleTags}>Social</span>
                    <Link href="/"className={styles.social}>Facebook</Link>
                    <Link href="/"className={styles.social}>Instagram</Link>
                    <Link href="/"className={styles.social}>Tiktok</Link>
                    <Link href="/"className={styles.social}>Youtube</Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;
