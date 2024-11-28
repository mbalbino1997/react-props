import style from "./card.module.css"
import Button from "../button/Button.jsx"
import placeholder from "../../../assets/imgs/placeholder.jpg"
export default function ({ title = "", image, content = "" }) {
    return (
        <div className={style.card}>
            <figure className={style.card_figure}><img className={style.card_img} src={image ?? placeholder} alt="" /></figure>
            <div className={style.card_description}>
                <h3>{title}</h3>
                <p>{content}</p>
                <Button />
            </div>
        </div>
    )
}