import Article from "./Article";

const ListArticles = ({ articles }) => {
    return (
        <div>
            {
                articles.length > 0 && (
                    <ul>
                        {
                            articles.map(({ url, title }) => (
                                <Article url={url} title={title} />
                            ))
                        }
                    </ul>
                )
            }
        </div>
    );
}

export default ListArticles;