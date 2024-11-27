import style from "./main.module.css"
import Card from "../ui/card/card.jsx"
export default function () {
    return (
        <section className={style.section}>
            <div className="container">
                <div className={style.row}>
                    <div className={style.col}>
                        <Card />
                    </div>
                </div>
            </div>
        </section>
    )
}
