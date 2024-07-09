import { RefObject, forwardRef, useEffect, useRef } from 'react';
import Select from 'react-select'
import { WidgetFormElementData } from '../../types';

type SelectMultipleInputProps = WidgetFormElementData & {
    isFocused?: boolean;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    autoComplete?: string
};

export default forwardRef(function SelectMultipleInput({ options, className = '',value, isFocused = false, placeholder = '', ...props }:SelectMultipleInputProps, ref: RefObject<HTMLInputElement>) {
    const input = ref ? ref : useRef();
    
    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <Select  
            className={'w-full flex bg-white border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm ' + className}
            defaultValue={value}
            options={options}
            {... props}
            styles={{
                
            }}

            classNames={{
                control: () => 'w-full flex',
                
                input: () => 'inline-gid flex-1 box-content not-form',
                
                option: () => 'px-3 py-2 bg-white hover:bg-gray-200 cursor-pointer',
                

            }}
        />
    );
});
