import { useParams } from "react-router-dom";

const BlogPost = () => {
    const { blogTitle } = useParams();
    return (
        <>
            <h1>{blogTitle}</h1>
        </>
    );
}

export default BlogPost;