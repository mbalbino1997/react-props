import style from "./main.module.css"
import Card from "../ui/card/card.jsx"
import posts from "../../data/posts.js"
export default function () {
    return (
        <div className="container">
            <div className={style.row}>
                {posts.map(post => (
                    post.published ?
                        <div className={style.col} key={post.id}>
                            <Card title={post.title} image={post.image} content={post.content} />
                        </div> : ""

                ))}
            </div>
        </div>
    )
}
