import styles from './Footer.module.css'
import Image from 'next/image';

const Footer = () => {
    return (
        <>
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <div className={styles.footer__body}>
                    <div className={styles.footer__link}>
                        <div>
                            <Image src='/Images/logo.webp' alt='logotip-GorbushkaMoscow' width={118} height={58} />
                        </div>
                        <div className={styles.footer__link_1}>
                            <ul>
                                <li><a href="#">О компании</a></li>
                                <li><a href="#">Доставка и оплата</a></li>
                                <li><a href="#">Обмен и возврат</a></li>
                            </ul>
                        </div>
                        <div className={styles.footer__link_2}>
                            <ul>
                                <li><a href="#">Гарантия и сервис</a></li>
                                <li><a href="#">Контакты</a></li>
                                <li><a href="#">Каталог</a></li>
                            </ul>
                        </div>
                        <div className={styles.footer__link_3}>  
                            <ul>
                                <li><a href="#">ТЦ Горбушка, г. <br /> Москва, ул. Барклая, 8</a></li>
                                <li><a href="#">10:00 — 21:00 без выходных</a></li>
                            </ul>               
                        </div>
                        <div className={styles.footer__link_4}>
                            <ul>
                                <h2><a href="#">+7 (916) 842-34-30</a></h2>
                                <li><a href="#">gorbushka-moscow@yandex.ru</a></li>
                                <div className={styles.footer__social_logo}>
                                    <li><a href="#"><Image src='/Image/FooterImg/Telegram.svg' alt='logotip-FooterWhatsApp' width={28} height={28} /></a></li>
                                    <li><a href="#"><Image src='/Image/FooterImg/WhatsApp.svg' alt='logotip-FooterTelegram' width={28} height={28} /></a></li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        {/*  Footer-Bottom =========================== */}

 
        </>
    );
};

export default Footer;