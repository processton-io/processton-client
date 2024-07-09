import { RefObject, forwardRef, useEffect, useRef, useState } from 'react';
import { DataTypeDateOfBirth, WidgetFormElementData } from '../../types';

type DateOfBirthInputProps = WidgetFormElementData & {
    isFocused?: boolean;
    className?: string;
    onChange?: (value: DataTypeDateOfBirth) => void;
    value?: DataTypeDateOfBirth;
    placeholder?: string;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    autoComplete?: string
};

export default forwardRef(function DateOfBirthInputProps({ value, className = '',  isFocused = false, ...props }:DateOfBirthInputProps, ref: RefObject<HTMLInputElement>) {
    const input = ref ? ref : useRef<HTMLInputElement>(null);

    const [date, setDate] = useState(value?.date)
    const [month, setMonth] = useState(value?.month)
    const [year, setYear] = useState(value?.year)

    const updateDate = (dataType, e: React.SyntheticEvent<HTMLSelectElement, Event> ) => {
        
        dataType === 'year' && setDate((e.target as HTMLSelectElement).value)
        dataType === 'month' && setMonth((e.target as HTMLSelectElement).value)
        dataType === 'date' && setYear(Number((e.target as HTMLSelectElement).value))

        const dOB :DataTypeDateOfBirth = {
            date: date,
            month: month,
            year: year
        }

        props.onChange(dOB);
        
    }

    useEffect(() => {
        if (isFocused) {
            input.current?.focus();
        }
    }, []);



    return (
        <div className="flex gap-0">
            <div className="mt-1 block w-1/3 flex-0">
                <select
                    key={props.map+`_date`}
                    onSelect={(e) => updateDate('date', e)}
                    className={'w-full flex bg-white border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm '}
                >
                    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30].map((option) => (<option value={option} selected={option === date as unknown as Number}>{option}</option>))}
                    
                </select>
            </div>
            <div className="mt-1 block w-1/3 flex-0">
                <select
                    key={props.map+`_month`}
                    onSelect={(e) => updateDate('month', e)}
                    className={'w-full flex bg-white border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm '}
                >
                    {['January','February','March','April','May','June','July','August','September','October','November','December'].map((option) => (<option value={option} selected={option === String(month)}>{option}</option>))}
                    
                </select>
            </div>
            <div className="mt-1 block w-1/3 flex-0">
                <select
                    key={props.map+`_year`}
                    onSelect={(e) => updateDate('year', e)}
                    className={'w-full flex bg-white border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm '}
                >
                    {Array.from({length: 122}, (_, i) => 1900 + i).map((option) => (<option value={option}  selected={option === year as unknown as Number}>{option}</option>))}
                    
                </select>
            </div>
        </div>
    );
});
