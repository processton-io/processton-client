import { RefObject, forwardRef, useEffect, useRef } from 'react';
import { WidgetFormElementData } from '../../types';
import classNames from 'classnames';

type TextInputProps = WidgetFormElementData & {
    isFocused?: boolean;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    autoComplete?: string;
};

export default forwardRef(function TextInput({ map, className = '', isFocused = false, value="", disabled=false,  ...props } : TextInputProps, ref: RefObject<HTMLInputElement>) {
    const input = ref ? ref : useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isFocused) {
            input.current?.focus();
        }
    }, []);
    
    return (
        <input
            type='text'
            name={map}
            disabled={disabled}
            onChange={(e) => props.onChange && props.onChange(e)}
            onBlur={(e) => props.onBlur && props.onBlur(e)}
            value={value}
            className={ classNames(
                'border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm text-black py-1.5',
                className,
                {
                    'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:cursor-not-allowed': disabled
                }
                )
            }
            ref={input}
        />
    );
});