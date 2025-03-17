
import { useId } from "react";
const Article = ({ url, title }) => {

    const objId = useId();

    return (
        <li key={objId}>
            <a href={url}>{title}</a>
        </li>
    );
}

export default Article;