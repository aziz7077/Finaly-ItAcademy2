import { laptop } from '@/constans/Laptop';
import LaptopTitle from './LaptopTitle/LaptopTitle';
import React, { useState } from "react";
import s from "./Laptop.module.css"
import Footer from '../footer/Footer';
import Header from '../Header/Header';
const Laptop = () => {
  const [select, setSelect] = useState("");
  return (
    <div className={s.container}>
      <Header />
      <div className={s.home}>
        <div className={s.filter}>
          <div className={s.filter_brend}>
            <h1>Фильтр по параметрам</h1>
            <select
              className={s.filter_brend_select}
              value={select}
              onChange={(e) => setSelect(e.target.value)}
              name=""
              id=""
            >
              <option className={s.option} value="Джинсы">
                {" "}
                Джинсы
              </option>
              <option className={s.option} value="Кроссовки">
                {" "}
                Кроссовки
              </option>
              <option className={s.option} value="Xiaomi">
                {" "}
                Кардиган
              </option>
            </select>
          </div>
        </div>
        <div className={s.card}>

          {laptop.map((item) => {
            return <LaptopTitle id={item.id} img={item.img} title={item.title} oldprice={item.oldprice} price={item.price} />
          })}
        </div>
      </div>                <Footer />

    </div>

  );
};

export default Laptop;