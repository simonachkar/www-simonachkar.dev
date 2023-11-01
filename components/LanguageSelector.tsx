export default function LanguageSelector() {
    return (
        <select id="languages" name="Languages" className="dark:bg-slate-800 dark:text-slate-200">
            <option value="en" defaultChecked>En</option>
            <option value="fr">Fr</option>
            <option value="ar">Ar</option>
        </select>
    )
}
