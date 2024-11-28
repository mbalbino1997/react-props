import style from "./card.module.css"
import Button from "../button/Button.jsx"
import placeholder from "../../../assets/imgs/placeholder.jpg"

export default function ({ title = "", image, content = "", tags }) {
    return (
        <div className={style.card}>
            <figure className={style.card_figure}><img className={style.card_img} src={image || placeholder} alt={title} /></figure>
            <div className={style.card_description}>
                <h3>{title}</h3>
                {tags.map((tag, id) => (
                    <span key={id} className={tag === "html" ? `${style.red}` : tag === "css" ? `${style.blue}` : tag === "php" ? `${style.green}` : tag === "js" ? `${style.yellow}` : ""}>{tag} </span>
                ))}
                <p>{content}</p>
                <Button />
            </div>
        </div>
    )
}