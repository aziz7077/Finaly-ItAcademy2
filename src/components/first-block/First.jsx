import styles from "./First.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import Link from "next/link";
import jaket from '../../../public/images/jaket/jaket4.png'
import kross from '../../../public/images/kross/kross4.png'
import jins from '../../../public/images/jins/jins2.png'
import jaket2 from '../../../public/images/jaket/jaket2.png'
import kross2 from '../../../public/images/kross/kross10.png'
import jins2 from '../../../public/images/jins/jins4.png'



const First = () => {
  return (
    <div className={styles.first}>
      <div className={styles.first__container}>
        <div className={styles.first__body}>
          <div className={styles.banner__block}>
            <Swiper
            grabCursor 
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              speed={2500}
              autoplay={{ delay: 1800 }}
              modules={[ Autoplay]}
              className={styles.swiperFirst}
            >
              <SwiperSlide className={styles.swiperSlide}>
                <div className={styles.banner__slide}>
                  <div className={styles.banner__slide_content}>
                    <h1>Большой</h1>
                    <h1>и еще больше</h1>
                    < p>
                    BKLYN brand Кроссовки форсы <br/> Nike Air Force 1 низкие бежевые
                                        </p>
                    <Link href="/second">
                    <button>Купить</button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <div className={styles.banner__slide_two}>
                  <div className={styles.banner__slide_content_two}>
                    <h1>Лучший</h1>
                    <h1>И еще лучше</h1>
                    <p>
                    Nike Кроссовки nike джордан
                    </p>
                    <Link href="/second">
                    <button className={styles.watch_btn}>Купить</button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <div className={styles.banner__slide_thre}>
                  <div className={styles.banner__slide_content_tre}>
                    <h1>Функциональный</h1>
                    <h1>и еще функцианальней</h1>
                    <p>
                    Nike Кроссовки мужские <br/> Nike Air Force     
                                   </p>
                    <Link href="/second">
                    <button className={styles.xiaomi_btn}>Купить</button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
            <div className={styles.banner__product}>
              <div className={styles.banner__product_container}>
                <div className={styles.banner__product_body}>
                  <div className={styles.banner__product_title}>
                    <h1>Товар дня</h1>
                    <div className={styles.card__icon}>
                      <Image
                        src="/Image/FirstBlock/Union.png"
                        alt="Union"
                        width={14}
                        height={17}
                      />
                      <Image
                        className={styles.product__favorites}
                        src="/Image/FirstBlock/like.png"
                        alt="Union"
                        width={19}
                        height={18}
                      />
                    </div>
                  </div>
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    grabCursor
                    autoplay={{ delay: 2500 }}
                    speed={2700}
                    modules={[ Autoplay]}
                    className={styles.cardSwiper}
                  >
                    <SwiperSlide>
                      <div className={styles.banner__product_slide}>
                        <Image
                          src="/Images/jins/jins1.png"
                          alt="jins"
                          width={200}
                          height={200}
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={styles.banner__product_slide}>
                        <Image
                           src="/Images/jins/jins4.png"
                           alt="jins"
                           width={200}
                           height={200}
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <div className={styles.banner__product_info}>
                    <p>
                    Life Jeans Джинсы мом с высокой посадкой зауженные
                    </p>
                    <Image
                      src="/Image/FirstBlock/reviews.png"
                      alt="Reviews"
                      width={73}
                      height={12}
                    />
                    <div className={styles.product_info_subtitle}>
                      <div>
                        <p>33 990 ₽</p>
                        <h2>31 990 ₽</h2>
                      </div>
                      <div>
                      <Link href="/second">
                        <button>Купить</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.catalog__block}>
            <div className={styles.catalog__card_items}>
              <div className={styles.catalog__card}>
                <p>Кордиган</p>
                <div>
                  <Link href="/mobil">
                  <Image className={styles.card_img}
                    src={jaket}
                    alt="jaket"
                    width={170}
                    height={160}
                  /></Link>
                </div>
              </div>
              <div className={styles.catalog__card}>
                <p>Кроссовки </p>
                <div>
                  <Link href="/television">
                  <Image  className={styles.card_img}
                  src={kross}
                  alt="kross"
                  width={160}
                  height={160}
                  /></Link>
                </div>
              </div>
              <div className={styles.catalog__card}>
                <p>Джинсы </p>
                <div>
                  <Link href="/laptop">
                  <Image className={styles.card_img}
                    src={jins}
                    alt="jins"
                    width={170}
                    height={160}
                  /></Link>
                </div>
              </div>
              <div className={styles.catalog__card}>
                <p>Кроссовки </p>
                <div>
                  <Image className={styles.card_img}
                    src={kross2}
                    alt="kross"
                    width={170}
                    height={160}
                  />
                </div>
              </div>
              <div className={styles.catalog__card}>
                <p>Кардиган</p>
                <div>
                  <Image className={styles.card_img}
                     src={jaket2}
                     alt="jaket"
                     width={160}
                     height={160}
                  />
                </div>
              </div>
              <div className={styles.catalog__card}>
                <p>Джинсы</p>
                <div>
                  <Image className={styles.card_img}
                   src={jins2}
                    alt="jins"
                    width={170}
                    height={160}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
