import { RefObject, forwardRef, useEffect, useRef } from 'react';
import PhoneInputComponent from 'react-phone-number-input'
import '../../../css/phone.css'
import { WidgetFormElementData } from '../../types';
import { CountryCode, E164Number } from 'libphonenumber-js/core';

type PhoneInputProps = WidgetFormElementData & {
    isFocused?: boolean;
    className?: string;
    onChange?: (event: E164Number) => void;
    onBlur?: (event: E164Number) => void;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    autoComplete?: string
};
export default forwardRef(function PhoneInput({ className = '', isFocused = false, ...props}:PhoneInputProps, ref: RefObject<HTMLInputElement>) {
    const input = ref ? ref : useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isFocused && input.current) {
            input.current.focus();
        }
    }, []);

    return (
        <PhoneInputComponent
            className={
                'border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm py-1.5 mt-1 ' +
                className
            }
            onChange={(e) => props.onChange && props.onChange(e)}
            defaultCountry={(props?.config?.defaultCountry ? props?.config?.defaultCountry : "PK") as CountryCode}
        />
    );
});
