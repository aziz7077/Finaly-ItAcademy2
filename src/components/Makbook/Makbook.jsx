import s from "../PurchaseFirstPage/PurchaseFirst.module.css";
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import Header from "../Header/Header";
import PurchaseFirst from "../PurchaseFirstPage/PurchaseFirst";

const Makbook = () => {

  function removeType() {
    setType(current => !current);

    setStyleClass(prev => !prev);
  }

  return (
    <div className={s.purchaseFirst}>   
      <PurchaseFirst/>
    </div>
  );
};

export default Makbook;
