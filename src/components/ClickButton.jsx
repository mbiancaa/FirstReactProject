import { useState } from 'react';

const ClickButton = () => {
    // let clicks = 0;
    const [clicks, setClicks] = useState(0);

    // const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        // clicks = clicks + 1;
        setClicks(clicks + 1);
    }

    // const handleToggle = () => {
    //     setIsOpen(!isOpen);
    // }

    return (
        <>
            <button onClick={handleClick}>
                Clicks: {clicks}
            </button>

            {/* <button onClick={handleToggle}>
                {isOpen ? "Hide" : "Show"}
            </button>
            {isOpen && <p>isOpen is true</p>} */}
        </>
    );
}

export default ClickButton;