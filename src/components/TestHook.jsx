import { useMemo, useState, useRef, useEffect, forwardRef, useContext } from 'react';

// const CustomButton = forwardRef(
//     (props, ref) => (
//         <button ref={ref}>{props.children}</button>
//     )
// );

const TestHook = () => {
    // const btnRef = useRef();

    // useEffect(() => {
    //     btnRef.current.focus()
    // }, []);

    // const [planets, setPlanets] = useState([
    //     "Earth",
    //     "Mars",
    //     "Jupiter",
    //     "Venus"
    // ]);

    // const [clicks, setClicks] = useState(0);

    // const [query, setQuery] = useState("");



    // const filteredPlanets = useMemo(() => planets.filter(planet => planet.includes(query)), [planets, query]);

    // const buttonRef = useRef();

    // console.log("Button ref: ", buttonRef.current);

    // const valRef = useRef(0);
    // useEffect(() => {
    //     // console.log("Button ref2: ", buttonRef.current);
    //     console.log(valRef);
    // });

    // const val = useMemo(() => {
    //     return a + b;
    // }, [a, b]);

    // const handleClick = () => {
    //     setClicks(clicks + 1);
    //     valRef.current += 1;
    //     // console.log("Button ref2: ", buttonRef.current);
    // }

    return (
        // <CustomButton ref={btnRef}>
        //     Button with forwared ref
        // </CustomButton>

        // <>
        /* <ul>
            {filteredPlanets.map(planet => (
                <li key={planet}>{planet}</li>
            ))}
        </ul> 

        /* <button ref={buttonRef} onClick={handleClick}>Clicks: {valRef.current}</button> */
        // </>
    );
}

export default TestHook;