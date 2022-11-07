import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function BlogDetail() {
    const params = useParams()
    const [article, setArticle] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(function() {
        async function getArticle() {
            const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`)
            const response = await request.json()
            setArticle(response)
            setLoading(false)
        }
        getArticle()
    }, [params])

    return (
        <article>
            {loading && (<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>)}
            {!loading && (
                <div>
            <h1>{article.title}</h1>
            <img className="img-detail" src={article.imageUrl} alt={article.title}/>
            <p>{article.summary}</p>
            <p className="judul">Source : <a href={article.url} target="_blank" rel="noreferrer">{article.newsSite}</a></p>
                </div>
            )}
        </article>
    )
}