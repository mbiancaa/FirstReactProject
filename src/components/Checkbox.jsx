import { useState } from "react";

const Checkbox = () => {
    const [isAccepted, setIsAccepted] = useState(false);

    const handleTerms = (event) => {
        setIsAccepted(event.target.value);
    }

    return (
        <div>
            <label>
                <input type="checkbox" name="terms" checked={isAccepted} onChange={handleTerms} />
                I accept the terms and conditions
            </label>
            <button type="button" disabled={!isAccepted}>Proceed</button>
        </div>
    );
}

export default Checkbox;