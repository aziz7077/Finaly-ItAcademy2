import s from "./Mobile.module.css";
import React, { useState } from "react";
import MobilePhone from "./MobilePhone/MobilePhone";
import { mobile } from "@/constans/Mobile";
import Footer from "../footer/Footer";
import Header from "../Header/Header";
const Mobile = () => {
    const [select, setSelect] = useState("");

    return (
        <div>
          <Header/>
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
                { mobile.map((item)=>{
                    return <MobilePhone id={item.id} img={item.img} title={item.title} oldprice={item.oldprice} price={item.price}/>
                })}
            </div> 
             </div>
             <Footer/>
        </div>
    );
};

export default Mobile;