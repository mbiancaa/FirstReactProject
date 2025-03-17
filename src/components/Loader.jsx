const Loader = ({ loading }) => {
    return (
        <>
            {loading && <p>Loading articles, please wait...</p>}
        </>
    );
}

export default Loader;