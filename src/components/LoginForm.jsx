import { useId } from 'react';

const LoginForm = ({ onLogin }) => {

    const usernameId = useId();
    const passwordId = useId();
    const selectId = useId();

    const onSubmit = (evt) => {
        evt.preventDefault();
        console.log('login...');

        const form = evt.target;
        const { username, password, language } = form.elements;
        console.log(username.value);
        console.log(password.value);
        onLogin({
            username: username.value,
            password: password.value,
            language: language.value
        });
        form.reset();
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor={usernameId}>Username</label>
                <input type="text" name="username" id={usernameId} />
            </div>
            <div>
                <label htmlFor={passwordId}>Password</label>
                <input type="password" name="password" id={passwordId} />
            </div>
            <div>
                <label htmlFor={selectId}>Choose language</label>
                <select id={selectId} name="language">
                    <option value="en">English</option>
                    <option value="ro">Romanian</option>
                    <option value="fr">French</option>
                </select>
            </div>
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;