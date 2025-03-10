import { useId } from 'react';

const TestComponent = () => {
    const id = useId();
    return (
        <div>
            <label htmlFor={id}>Text Field</label>
            <input type="text" id={id} />
        </div>
    );
}

export default TestComponent;