const ArticleSearchForm = ({ onSearch }) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const topic = form.elements.topic.value;
        if (topic.trim() === "") {
            alert("Please enter a topic!");
            return;
        }
        onSearch(topic);
        form.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="topic" placeholder="Search for a topic" />
            <button>Search</button>
        </form>
    );
}

export default ArticleSearchForm;