import { useId, useState } from 'react'
const LanguageSwitcher = () => {
    const selectId = useId();
    const [language, setLanguage] = useState("ro");
    const handleSelect = (event) => {
        setLanguage(event.target.value)
    }

    return (
        <div>
            <label htmlFor={selectId}>Choose language</label>
            <select
                id={selectId}
                value={language}
                onChange={handleSelect}
            >
                <option value="en">English</option>
                <option value="ro">Romanian</option>
                <option value="fr">French</option>
            </select>
        </div>
    );
}

export default LanguageSwitcher;