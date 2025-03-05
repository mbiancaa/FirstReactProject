import { useState, useEffect } from 'react';

const ClickButton = () => {
    // let clicks = 0;
    const [clicks, setClicks] = useState(0);
    // const [first, setFirst] = useState(0);
    // const [second, setSecond] = useState(0);

    // const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setClicks(clicks + 1);
    }

    const resetClicks = () => {
        setClicks(0);
    }

    useEffect(() => { }, []);

    useEffect(() => {
        window.localStorage.setItem("savedClicks", clicks);
        console.log(`clicks updated: ${clicks}`);
    }, [clicks]);

    //useEffect(callback, deps)

    // useEffect(() => {
    //     /* se ruleaza la mounting si de fiecare data cand componenta isi face update, 
    //     indiferent de ce valori se schimba (state sau props) */
    //     document.title = `Clicks: ${clicks}`;
    // });

    // useEffect(() => {
    //     // se ruleaza doar o singura data, la mounting
    //     console.log('1');
    // }, []);

    // useEffect(() => {
    //     // document.title = `Clicks: ${clicks}`;
    //     console.log('1');
    // }, []);

    // const handleToggle = () => {
    //     setIsOpen(!isOpen);
    // }

    // useEffect(() => {
    //     console.log('mount');

    //     return () => {
    //         console.log('unmount');
    //     }
    // }, []);

    // useEffect(() => {
    //     console.log('update component')
    // });



    return (
        <>
            <button onClick={handleClick}>
                Clicks: {clicks}
            </button>
            <button onClick={resetClicks}>
                Reset
            </button>

            {/* <button onClick={() => setFirst(first + 1)}>
                First: {first}
            </button>

            <button onClick={() => { setSecond(second + 1) }}>
                Seconds: {second}
            </button> */}

            {/* <button onClick={handleToggle}>
                {isOpen ? "Hide" : "Show"}
            </button>
            {isOpen && <p>isOpen is true</p>} */}
        </>
    );
}

export default ClickButton;