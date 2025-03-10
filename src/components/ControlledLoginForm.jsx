import { useId, useState } from 'react';

const ControlledLoginForm = ({ onLogin }) => {
    const usernameId = useId();
    const passwordId = useId();
    const [values, setValues] = useState({
        username: "",
        password: ""
    })

    const handleChange = (event) => {
        event.preventDefault();
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin(values);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor={usernameId}>Username</label>
                <input type="text" name="username" value={values.username} id={usernameId} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor={passwordId}>Password</label>
                <input type="password" name="password" value={values.password} id={passwordId} onChange={handleChange} />
            </div>
            <button type="submit">Login</button>
        </form>
    );
}

export default ControlledLoginForm;