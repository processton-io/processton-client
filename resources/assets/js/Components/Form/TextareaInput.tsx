import React, { RefObject, forwardRef, useEffect, useRef } from 'react';
import { WidgetFormElementData } from '../../types';

type TextareaInputProps = WidgetFormElementData & {
    isFocused?: boolean;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    autoComplete?: string
};

export default forwardRef(function TextareaInput({ map, className = '', isFocused = false, ...props } : TextareaInputProps, ref: RefObject<HTMLTextAreaElement>) {

    const input: RefObject<HTMLTextAreaElement> = ref ? ref : useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <textarea
            name={map}
            onChange={(e) => props.onChange && props.onChange(e)}
            onBlur={(e) => props.onBlur && props.onBlur(e)}
            className={
                'border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm py-1.5 ' +
                className
            }
            ref={input as RefObject<HTMLTextAreaElement>} // Fix: Change the type of the ref
        ></textarea>
    );
});
