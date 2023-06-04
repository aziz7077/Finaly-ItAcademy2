import Link from "next/link";
import s from "./Third.module.css";

const Third = () => {
    return (
        <div className={s.third}>
                <div className={s.third__title}>
                    <Link href="/macbook" className={s.perehod}>SJ FASHION Кроссовки Nike Air Force 1 SB Dunk Low</Link>
                </div>
        </div>
    );
};

export default Third;