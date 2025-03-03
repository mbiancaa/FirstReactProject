import { useState } from 'react';

const ClickCounterAll = ({ value, onUpdate }) => {

    return (
        <>
            <button onClick={onUpdate}>
                Clicks: {value}
            </button>
        </>
    );
}

export default ClickCounterAll;