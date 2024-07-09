import { RefObject, forwardRef, useState, useRef } from 'react';
import { DataTypeAge, WidgetFormElementData } from '../../types';
import { ChangeEvent } from 'react';

type AgeInputProps = WidgetFormElementData & {
    isFocused?: boolean;
    className?: string;
    onChange?: (value: DataTypeAge) => void;
    onBlur?: (value: DataTypeAge) => void;
    value?: DataTypeAge;
    placeholder?: string;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    autoComplete?: string
};

export default forwardRef(function AgeInputProps({ map, className = '',  isFocused = false, value, ...props }:AgeInputProps, ref: RefObject<HTMLInputElement>) {
    
    const input = ref ? ref : useRef<HTMLInputElement>(null);

    const [title, setTitle] = useState(value?.title)
    const [age, setAgeValue] = useState(value?.value)

    const updateDate = (dataType, e: React.SyntheticEvent<HTMLSelectElement, Event> | React.SyntheticEvent<HTMLInputElement, Event> ) => {
        
        dataType === 'title' && setTitle((e.target as HTMLInputElement).value)
        dataType === 'value' && setAgeValue(Number((e.target as HTMLSelectElement).value))

        const ageValue :DataTypeAge = {
            title: title,
            value: age
        }

        props.onChange && props.onChange(ageValue);
        props.onBlur && props.onBlur(ageValue);
        
    }


    return (
        <div className="flex gap-0">
            <div className="mt-1 block w-1/3 flex-0">
                <input
                    type='number'
                    name={map+`_value`}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updateDate('value', e)}
                    onBlur={(e: ChangeEvent<HTMLInputElement>) => updateDate('value', e)}
                    className={
                        'border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm py-1.5 ' +
                        className
                    }
                    ref={input}
                />
            </div>
            <div className="mt-1 block w-1/3 flex-0">
                <select
                    key={map+`_title`}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => updateDate('title', e)}
                    className={'w-full flex bg-white border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm '}
                >
                    <option value="years">Years</option>
                    <option value="months">Months</option>
                    <option value="day">days</option>
                    <option value="hours">hours</option>
                    
                </select>
            </div>
        </div>
    );
});
