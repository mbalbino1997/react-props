import style from "./card.module.css"
import Button from "../button/button.jsx"
export default function () {
    return (
        <div className={style.card}>
            <div className={style.cardImg}></div>
            <div className={style.cardDescription}>
                <h3>Titolo del Post</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi laboriosam sapiente architecto deleniti quae! Architecto!</p>
                <Button />
            </div>
        </div>
    )
}