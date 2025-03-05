import { useState, useEffect } from "react";

const Feedback = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [total, setTotal] = useState(0);

    const onReset = () => {
        setGood(0);
        setNeutral(0);
        setBad(0);
    };

    useEffect(() => {
        setTotal(good + neutral + bad);
    }, [good, neutral, bad]);



    return (
        <>
            <h1>Sip Happens Cafe</h1>
            <p>Please leave your feedback</p>
            <button onClick={() => setGood(good + 1)}>Good</button>
            <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
            <button onClick={() => setBad(bad + 1)}>Bad</button>
            <button onClick={onReset}>Reset</button>

            {
                total <= 0 ? (
                    <p>No feedback yet</p>
                ) : (
                    <>
                        <p>Good: {good}</p>
                        <p>Neutral: {neutral}</p>
                        <p>Bad: {bad}</p>
                        <p>Total: {total}</p>
                        <p>Positive: {Math.round((good / total) * 100)}%</p>
                    </>
                )
            }


        </>
    );
}

export default Feedback;