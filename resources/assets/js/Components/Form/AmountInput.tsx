import { WidgetFormElementData } from '../../types';
import { RefObject, forwardRef, useEffect, useRef } from 'react';
import CurrencyInput from 'react-currency-input-field';


type AmountInputProps = WidgetFormElementData & {
    isFocused?: boolean;
    className?: string;
    onValueChange?: (s: string) => void;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    autoComplete?: string
};


export default forwardRef(function AmountInput({ className = '', isFocused = false, ...props } : AmountInputProps, ref: RefObject<HTMLInputElement>) {
    const input = ref ? ref : useRef();
    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <>
            <CurrencyInput
                
                onValueChange={(e) => props.onValueChange && props.onValueChange(e)}
                className={
                    'border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm py-1.5 ' +
                    className
                }
                ref={input}
            />
        </>
    );
});
