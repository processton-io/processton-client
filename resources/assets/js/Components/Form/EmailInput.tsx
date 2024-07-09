import { RefObject, forwardRef, useEffect, useRef } from 'react';
import { WidgetFormElementData } from '../../types';

type EmailInputProps = WidgetFormElementData & {
    isFocused?: boolean;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    autoComplete?: string
};

export default forwardRef(function EmailInput({ map, className = '', isFocused = false, ...props } : EmailInputProps, ref: RefObject<HTMLInputElement>) {
    const input = ref ? ref : useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isFocused) {
            input.current?.focus();
        }
    }, []);
    
    return (
        <input
            type='email'
            onChange={(e) => props.onChange && props.onChange(e)}
            onBlur={(e) => props.onBlur && props.onBlur(e)}
            name={map}
            className={
                'border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm py-1.5 ' +
                className
            }
            ref={input}
        />
    );
});