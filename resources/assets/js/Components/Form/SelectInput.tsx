import { RefObject, forwardRef, useEffect, useRef } from 'react';
import { WidgetFormElementData } from '../../types';

type SelectInputProps = WidgetFormElementData & {
    isFocused?: boolean;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    onBlur?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    autoComplete?: string
};

export default forwardRef(function SelectInput({ map, options, className = '',value, isFocused = false, placeholder = '', ...props } : SelectInputProps, ref: RefObject<HTMLSelectElement>) {
    const input = ref ? ref : useRef();
    
    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <select
            className={'w-full flex bg-white border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm ' + className}
            defaultValue={value}
            name={map}
            onChange={(e) => props.onChange && props.onChange(e)}
            onBlur={(e) => props.onBlur && props.onBlur(e)}
        >
            <option value="">{placeholder}</option>
            {options.map((option, index) => (
                <option key={index} selected={value === option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    );
});
