import { RefObject, forwardRef, useEffect, useRef, useState } from 'react';
import Datepicker from "tailwind-datepicker-react"
import Icon from '../Elements/AppIcon';
import { WidgetFormElementData } from '../../types';
import { IOptions } from 'tailwind-datepicker-react/types/Options';

type DateInputProps = WidgetFormElementData & {
    isFocused?: boolean;
    className?: string;
    onChange?: (date: Date) => void;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    autoComplete?: string
};

export default forwardRef(function DateInput({ map, className = '', isFocused = false, ...props } : DateInputProps, ref: RefObject<HTMLInputElement>) {
    const input = ref ? ref : useRef<HTMLInputElement>(null);
    const [show, setShow] = useState(false);

	const options : IOptions = {
        autoHide: true,
        todayBtn: false,
        clearBtn: true,
        clearBtnText: "Clear",
        maxDate: new Date("2030-01-01"),
        minDate: new Date("1950-01-01"),
        theme: {
            background: "",
            todayBtn: "",
            clearBtn: "",
            icons: "",
            text: "",
            disabledText: "",
            input: "bg-white mt-0 border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm py-1.5 mt-1 text-md block w-full text-black",
            inputIcon: "text-gray-700",
            selected: "",
        },
        icons: {
            // () => ReactElement | JSX.Element
            prev: () => <Icon icon="chevron-left" className="h-4" />,
            next: () => <Icon icon="chevron-right" className="h-4" />,
        },
        defaultDate: props.value? new Date(props.value) : null,
        language: "en",
        disabledDates: [],
        weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        inputNameProp: "date",
        inputIdProp: "date",
        inputPlaceholderProp: "Select Date",
        inputDateFormatProp: {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    }
    
	const handleClose = (state) => {
		setShow(state)
	}

    useEffect(() => {
        if (isFocused) {
            
            input.current.focus();
        }
    }, []);

    return (
        <Datepicker
            show={show}
            setShow={handleClose}
            {...props}
            options={options} 
            onChange={(date) => { props.onChange && props.onChange(date) }}
            value={props.value ? new Date(props.value) : null} // Fix: Convert the value to a Date object
            classNames={
                'border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm py-1.5 ' +
                className
            }
        />
    );
});
