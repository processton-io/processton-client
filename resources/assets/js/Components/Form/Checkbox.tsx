import { useState } from "react";

export default function Checkbox({ name, label, className = '', ...props }) {
    const [checked, setChecked] = useState(props.value || false);

    const handleChange = () => {
        setChecked(!checked);
        props.onChange(!checked);
    };
    return (
        <label className="flex items-center" htmlFor={name} onClick={handleChange}>
            <input
                checked={checked}
                onChange={handleChange}
                name={name}
                type="checkbox"
                className={
                    'rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 ' +
                    className
                }
            />
            <span className="ml-2 text-sm text-gray-600">{label}</span>
        </label>
    );
}
