const ErrorMessage = ({ error, text }) => {
    return (
        <>
            {error && <p>{text}</p>}
        </>
    );
}

export default ErrorMessage;