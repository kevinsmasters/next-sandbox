import { articles } from '../../../data'

export default function handler({ query: { url }}, res) {
    const filtered = articles.filter(article => article.url == url)

    if(filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({message: `Article with the url of ${ url } is not found`})
    }
}
