import { RefObject, forwardRef, useEffect, useRef, useState, Fragment } from 'react';
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { WidgetFormElementData } from '../../types';

type TagsInputProps = WidgetFormElementData & {
    isFocused?: boolean;
    className?: string;
    handleInputChange?: (value: string) => void;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    autoComplete?: string
};


export default forwardRef(function TagsInput({ map, className = '', isFocused = false, options = [], ...props }:TagsInputProps, ref: RefObject<HTMLInputElement>) {
    const input = ref ? ref : useRef<HTMLInputElement>(null);
    const [tags, setTags] = useState([]);
    const [tag, setTag] = useState('');

    const filteredOption =
        tag === ''
        ? options
        : options.filter((option) => {
            return option.toLowerCase().includes(tag.toLowerCase())
            })

    
    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    const watchWords = (e) => {

        e.preventDefault()

        if(e.keyCode == 188 || e.keyCode == 13){
            
            if(!tags.includes(tag)){
                setTags([...tags, tag]);
            }
            setTag('')
            return false   
        }
        
        if(e.keyCode < 12) return false
        if(e.keyCode > 13 && e.keyCode < 48) return false
        if(e.keyCode > 111 && e.keyCode < 188) return false
        
        setTag(tag+e.key);
        props.handleInputChange(tag)

    }

    const setSelectedTag = () => {
        if(!tags.includes(tag)){
            setTags([...tags, tag]);
        }
        setTag('')
    }

    return (
        <div className='flex'>
            <Combobox value={tag} onChange={setSelectedTag}>
                <div className="relative mt-1">
                <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                    <Combobox.Input
                        className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                        onKeyUp={(e) => watchWords(e)} 
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                    />
                    </Combobox.Button>
                </div>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setTag('')}
                >
                    <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                    {filteredOption.length === 0 && tag !== '' ? (
                        <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                        Press "," to create "{tag}"
                        </div>
                    ) : (
                        filteredOption.map((option) => (
                        <Combobox.Option
                            key={option}
                            className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active ? 'bg-teal-600 text-white' : 'text-gray-900'
                            }`
                            }
                            value={option}
                        >
                            {({ selected, active }) => (
                            <>
                                <span
                                className={`block truncate ${
                                    selected ? 'font-medium' : 'font-normal'
                                }`}
                                >
                                {option}
                                </span>
                                {selected ? (
                                <span
                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                    active ? 'text-white' : 'text-teal-600'
                                    }`}
                                >
                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                </span>
                                ) : null}
                            </>
                            )}
                        </Combobox.Option>
                        ))
                    )}
                    </Combobox.Options>
                </Transition>
                </div>
            </Combobox>
            <div className='flex-1'>
                {tags.map((element) => {
                    return <span className='inline mr-2 px-2 py-1.5 border rounded-sm'>{element}</span>
                })}
            </div>
        </div>
    );
});
