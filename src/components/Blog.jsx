import { useEffect, useState } from "react";
import { fetchArticlesWithTopic } from "../api/articles-api";
import ListArticles from "./ListArticles";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import ArticleSearchForm from "./ArticleSearchForm";

const Blog = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        async function fetchArticles() {
            try {
                execReq("react");
            } catch (err) {
                handleReqErr(err);
            } finally {
                setLoading(false);
            }
        }

        fetchArticles();
    }, []);

    const handleSearch = async (topic) => {
        try {
            execReq(topic);
        } catch (err) {
            handleReqErr(err);
        } finally {
            setLoading(false);
        }
    }

    const execReq = async (topic) => {
        setArticles([]);
        setLoading(true);
        setError(false);
        const data = await fetchArticlesWithTopic(topic);
        setArticles(data);

        if (data.length < 1) {
            setError(true);
            setErrorMessage(`No articles with topic: ${topic}`);
        }

        console.log(data);
    }

    const handleReqErr = (err) => {
        console.log(err);
        setError(true);
        setErrorMessage("There is an error loading articles.");
    }

    return (
        <div>
            <ArticleSearchForm onSearch={handleSearch} />
            <h1>Latest articles</h1>
            <Loader loading={loading} />
            <ErrorMessage error={error} text={errorMessage} />
            <ListArticles articles={articles} />
        </div>
    );
}

export default Blog;