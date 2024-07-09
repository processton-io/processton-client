
import { RefObject, forwardRef, useEffect, useRef } from 'react';
import AsyncSelect from 'react-select/async';
import { WidgetFormElementData } from '../../types';

type SelectUrlInputProps = WidgetFormElementData & {
    isFocused?: boolean;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    autoComplete?: string
};

export default forwardRef(function SelectUrlInput({ url, className = '',value, isFocused = false, placeholder = '', ...props }: SelectUrlInputProps, ref: RefObject<HTMLSelectElement>) {
    const input = ref ? ref : useRef();
    
    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    const getApiData = async (inputValue) => {
        let jsonResponse = await fetch(
            url+`&search=`+inputValue, {
                headers : {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json',
                }
            },
        ).then((response) => response.json());  

        let responseData = jsonResponse.data.structure.records.data.map((item) => {
            return {
                label: item.name,
                value: item.id
            };
        });
        return responseData;
    };

    const loadOptions = (inputValue) => {
        console.log(inputValue);
        return getApiData(inputValue);
    };

    return (
        <AsyncSelect cacheOptions loadOptions={loadOptions} defaultOptions  
            className={'w-full flex bg-white border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm ' + className}
            {... props}
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
