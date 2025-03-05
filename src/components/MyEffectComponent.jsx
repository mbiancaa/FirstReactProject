import { useEffect } from "react";

const MyEffectComponent = () => {

    useEffect(() => {
        setInterval(() => {
            console.log(`Interval: ${Date.now()}`)
        }, 2000);
    }, []);

    return (
        <>My component</>
    );
}

export default MyEffectComponent;