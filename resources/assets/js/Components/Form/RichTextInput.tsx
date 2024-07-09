import { RefObject, useEffect, useRef } from 'react';
import { WidgetFormElementData } from '../../types';
import RichTextEditor from "./RichTextEditor";
import classNames from 'classnames';

type RichTextInputProps = WidgetFormElementData & {
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

export default function RichTextInput({ map, className = '', isFocused = false, value , onChange }: RichTextInputProps, ref: RefObject<HTMLInputElement>) {

    const input = ref ? ref : useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isFocused) {
            input.current?.focus();
        }
    }, []);

    return (
        <div className={classNames("bg-white border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm py-1.5 mt-1 block w-full px-2", className)}>
            <RichTextEditor data={value} onChange={onChange} editorblock="editorjs-container" />
            <input type="hidden" name={map} value={value} />
        </div>
    );
}
