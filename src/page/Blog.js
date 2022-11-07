import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Blog() {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(function() {
        async function getData() {
            const request = await fetch('https://api.spaceflightnewsapi.net/v3/articles')
            const response = await request.json()
            setArticles(response)
            setLoading(false)
        } 
        getData()
    }, [])

    return (
        <section>
            <p>Berita Terbaru Tentang SpaceFlight</p>

            {loading && (<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>)}
            {!loading && (
                <div>
                    {articles.map(function(article) {
                        return (
                            <article key={article.id}>
                                <h2 className="judul"><Link to={`/blog/${article.id}`}>{article.title}</Link></h2>
                                <time>{new Date(article.publishedAt).toDateString()}</time>
                            </article>
                        )
                    })}
                </div>
            )}
        </section>
    )
}