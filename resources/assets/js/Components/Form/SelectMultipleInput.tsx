import { RefObject, forwardRef, useEffect, useRef } from 'react';
import Select from 'react-select'
import { WidgetFormElementData } from '../../types';

type SelectMultipleInputProps = WidgetFormElementData & {
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

export default forwardRef(function SelectMultipleInput({ options, className = '',value, isFocused = false } : SelectMultipleInputProps, ref: RefObject<HTMLSelectElement>) {
    const input = ref ? ref : useRef();
    
    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <Select  
            className={'w-full flex border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' + className}
            isMulti
            defaultValue={value}
            options={options}
            styles={{
                control: () => ({}),
                clearIndicator: (baseStyles) => ({...baseStyles}),
                container: (baseStyles) => ({...baseStyles}),
                dropdownIndicator: (baseStyles) => ({...baseStyles}),
                group: (baseStyles) => ({...baseStyles}),
                groupHeading: (baseStyles) => ({...baseStyles}),
                indicatorsContainer: (baseStyles) => ({...baseStyles}),
                indicatorSeparator: (baseStyles) => ({...baseStyles}),
                input: (baseStyles) => ({...baseStyles}),
                loadingIndicator: (baseStyles) => ({...baseStyles}),
                loadingMessage: (baseStyles) => ({...baseStyles}),
                menu: (baseStyles) => ({...baseStyles}),
                menuList: (baseStyles) => ({...baseStyles}),
                menuPortal: () => ({}),
                multiValue: (baseStyles) => ({...baseStyles}),
                multiValueLabel: (baseStyles) => ({...baseStyles}),
                multiValueRemove: (baseStyles) => ({...baseStyles}),
                noOptionsMessage: (baseStyles) => ({...baseStyles}),
                option: () => ({}),
                placeholder: (baseStyles) => ({...baseStyles}),
                singleValue: (baseStyles) => ({...baseStyles}),
                valueContainer: (baseStyles) => ({...baseStyles})

            }}

            classNames={{
                control: () => 'w-full flex',
                input: () => 'inline-gid flex-1 box-content not-form',
                option: () => 'px-3 py-2 bg-white hover:bg-gray-200 cursor-pointer',

            }}
        />
    );
});
