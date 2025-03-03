const CustomButton = ({ message, children }) => {

    // functie a event handlerului 
    // const handleClick = (event) => {
    //     // alert('Button was clicked');
    //     console.log(event);
    // }

    return (
        <>
            {/* functie anonima */}
            {/* <button onClick={() => alert('Button was clicked')}>
            Click me
            </button> */}

            {/* <button onClick={(evt) => console.log(evt)}>
                Click me, I'm the second button
            </button> */}


            {/* functie de event handler transmisa ca referinta */}
            {/* <button onClick={handleClick}>
                Click me
            </button> */}

            <button onClick={() => alert(message)}>
                {children}
            </button>


        </>
    );

}

export default CustomButton;