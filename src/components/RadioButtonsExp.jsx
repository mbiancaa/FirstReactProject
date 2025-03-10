import { useState } from 'react'

const RadioButtonsExp = () => {

    const [coffeeSize, setCoffeeSize] = useState("sm");
    const handleSizeChange = (event) => {
        setCoffeeSize(event.target.value);
    }

    return (
        <>
            <h1>Select coffee size</h1>
            <label>
                <input type="radio" name="coffeeSize" value="sm" checked={coffeeSize === 'sm'} onChange={handleSizeChange} />
                Small
            </label>
            <br />
            <label>
                <input type="radio" name="coffeeSize" value="md" checked={coffeeSize === 'md'} onChange={handleSizeChange} />
                Medium
            </label>
            <br />
            <label>
                <input type="radio" name="coffeeSize" value="lg" checked={coffeeSize === 'lg'} onChange={handleSizeChange} />
                Large
            </label>
        </>
    );
}

export default RadioButtonsExp;