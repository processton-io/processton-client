import { RefObject, useEffect, useRef } from 'react';

import FormViewer from "./FormViewer";
import ActionButton from "./ActionButton";
import { useState } from "react";
import TextInput from "./TextInput";
import InputLabel from "./InputLabel";
import Icon from "../Elements/AppIcon";

import { Draggable } from "react-drag-reorder";
import { useCallback } from "react";
import TextareaInput from "./TextareaInput";

import { WidgetFormElementData, WidgetForm, WidgetFormElementType } from '../../types';

type FormEditorInputProps = WidgetFormElementData & {
    isFocused?: boolean;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: WidgetForm;
    placeholder?: string;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    autoComplete?: string
};




export default function FormEditor({ isFocused = false, value, onChange }:FormEditorInputProps, ref: RefObject<HTMLInputElement>) {
    
    const input = ref ? ref : useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isFocused) {
            input.current?.focus();
        }
    }, []);

    const [formStructure, setFormStructure] = useState(value ? value : {
        "rows": [
            {
                "width" : "full",
                "elements": [
                ]
            }
    ]});
    

    const addRow = () => {
        let newFormStructure: WidgetForm = Object.assign({}, formStructure) as WidgetForm;
        newFormStructure.rows.push({
            width: {
                xxxl: 12,
                xxl: 12,
                xl: 12,
                lg: 12,
                md: 12,
                sm: 12,
                xs: 12,
                xxs: 12,
                xxxs: 12,
            },
            "elements": [
                {
                    width: {
                        xxxl: 12,
                        xxl: 12,
                        xl: 12,
                        lg: 12,
                        md: 12,
                        sm: 12,
                        xs: 12,
                        xxs: 12,
                        xxxs: 12,
                    },
                    type: WidgetFormElementType.TEXT,
                    label: 'First Name',
                    map: 'first_name',
                    value: '',
                    info: ''
                },
                {
                    width: {
                        xxxl: 12,
                        xxl: 12,
                        xl: 12,
                        lg: 12,
                        md: 12,
                        sm: 12,
                        xs: 12,
                        xxs: 12,
                        xxxs: 12,
                    },
                    type: WidgetFormElementType.TEXT,
                    label: 'Last Name',
                    map: 'last_name',
                    value: '',
                    info: ''
                }
            ]
        });
        
        setFormStructure(newFormStructure);
    }

    const addRowElement = (index) => {
        let newFormStructure = Object.assign({}, formStructure);
        newFormStructure.rows[index].elements.push({
            width: {
                xxxl: 12,
                xxl: 12,
                xl: 12,
                lg: 12,
                md: 12,
                sm: 12,
                xs: 12,
                xxs: 12,
                xxxs: 12,
            },
            label: 'Click to edit',
            type: WidgetFormElementType.NATIVE,
            map: '',
            value: '',
            info: ''
        });
        
        setFormStructure(newFormStructure);
    }

    const changeValue = (index, elementIndex, data) => {
        
        let newFormStructure = Object.assign({}, formStructure);
        newFormStructure.rows[index].elements[elementIndex] = data;
        
        setFormStructure(newFormStructure);
        
    }

    const changeGroupValue = (index, data) => {
        let newFormStructure = Object.assign({}, formStructure);
        newFormStructure.rows[index] = {
            ...newFormStructure.rows[index],    
            ...data
        };
        setFormStructure(newFormStructure);
    }

    const array_move = (arr, old_index, new_index) => {
        if (new_index >= arr.length) {
            var k = new_index - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        return arr; // for testing
    }

    const getRowPos = (currentPos, newPos) => {
        let newFormStructure = Object.assign({}, formStructure);
        newFormStructure.rows = array_move(newFormStructure.rows, currentPos, newPos);
        setFormStructure(newFormStructure);
    };

    // const getElementPos = (currentPos, newPos) => {
    //     console.log(currentPos, newPos);
    // };

    useEffect(() => {
        onChange(formStructure);
    },[formStructure]);

    const DraggableRender = useCallback(() => {

        return (
            <Draggable onPosChange={getRowPos}>
                {formStructure.rows.map((row, index) => {
                    return (<>
                        <div key={index} className="my-4">
                            <div className="border border-l-6 rounded-sm flex flex-col gap-4">
                                <RowConfig element={row} setData={(data) => changeGroupValue(index, data)} />
                                <div className="px-4 bg-white h-80 relative overflow-y-scroll">
                                    {row.elements.map((element, elementIndex) => {
                                        return (<RowInput key={elementIndex} element={element} setData={(data) => changeValue(index, elementIndex, data)} />);
                                    })}
                                    <div className="bg-gray-50 text-center border border-dotted py-4 text-slate-700 mb-4" onClick={() => addRowElement(index)}>
                                        <Icon icon="plus" className="inline-block mr-2 h-6 w-6" />
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </>
                    );
                })}

            </Draggable>
        );
    }, [formStructure]);

    return (
        <div className="bg-white border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm py-1.5 mt-1 block w-full px-2">
            <div className="gap-4 w-full grid grid-cols-12">
                <div className="col-span-6">
                    <DraggableRender />
                    <div>
                        <ActionButton type="button" onClick={() => addRow()}>Add Row</ActionButton>
                    </div>
                </div>
                
                <div className="py-4 col-span-6">
                    <FormViewer data={formStructure} onChange={(value) => console.log(value)} />
                </div>
            </div>
        </div>
    );
}

function RowConfig({ element, setData }) {
    const [groupLabel, setGroupLabel] = useState(element.group_label);
    const [groupDescription, setGroupDescription] = useState(element.group_description);


    return <div className="grid grid-cols-12 gap-4 bg-gray-50 p-4 border-b">
        <div className="col-span-12">
            <InputLabel htmlFor="groupLabel" label="Label" required={false} />
            <TextInput
                map="groupLabel"
                className="w-full"
                value={groupLabel}
                onChange={(e) => setGroupLabel(e.target.value)}
                onBlur={() => setData({
                    "group_label": groupLabel,
                    "group_description": groupDescription
                })}
            />
        </div>
        <div className="col-span-12">
            <InputLabel htmlFor="groupDescription" label="Description" required={false} />
            <TextareaInput
                map="groupDescription"
                className="w-full"
                value={groupDescription}
                onChange={(e) => setGroupDescription(e.target.value)}
                onBlur={() => setData({
                    "group_label": groupLabel,
                    "group_description": groupDescription
                })}
            />
        </div>
    </div>
}

function RowInput({ element, setData }) {

    const [showForm, setShowForm] = useState(false);

    const [label, setLabel] = useState(element.label);
    const [name, setName] = useState(element.name);
    const [mapField, setMapField] = useState(element.map);
    const [width, setWidth] = useState(element.width);
    const [type, setType] = useState(element.type);
    const [optionsList, setOptionsList] = useState(element.options ? element.options : []);
    const [info, setInfo] = useState(element.info ? element.info : '');
    const [placeholder, setPlaceHolder] = useState(element.placeholder ?element.placeholder :'');

    const getOptions = (options) => {
        let optionString = '';
        options.map((option, index) => {
            if (index == 0) {
                optionString = option.key + ':' + option.value;
            } else {
                optionString = optionString + ';' + option.key + ':' + option.value;
            }
        });
        return optionString;
    }

    const setOptions = (value) => {
        //explode with delimiter ;
        let options = value.split(';');
        //get key and value by further spliting by : and if : not fouund then use index as key
        let optionsArray = [];
        options.map((option, index) => {
            let optionData = option.split(':');
            if (optionData.length == 1) {
                optionsArray.push({ key: index, value: optionData[0] });
            } else {
                optionsArray.push({ key: optionData[0], value: optionData[1] });
            }
        });
        console.log(options);
        setOptionsList(optionsArray);
    }

    const upDateElement = () => {
        setData({
            "label": label,
            "name": name,
            "map": mapField,
            "info": info,
            "placeholder": placeholder,
            "width": width,
            "options": optionsList,
            "type": type
        })
    }

    return (
        <div className="border border-l-3 rounded-sm bg-gray-50">
            {showForm && <>
                <div className="text-right">
                    <Icon icon="close" onClick={() => setShowForm(!showForm)} />
                </div>
                <div className="p-4 grid grid-cols-12 gap-4">
                    <div className="col-span-6">
                        <InputLabel htmlFor="label" label="Label" required={false} />
                        <TextInput
                            map="label"
                            className="w-full"
                            value={label}
                            onChange={(e) => setLabel(e.target.value)}
                        />
                    </div>
                    <div className="col-span-6">
                        <InputLabel htmlFor="placeholder" label="Placeholder" required={false} />
                        <TextInput
                            map="placeholder"
                            className="w-full"
                            value={placeholder}
                            onChange={(e) => setPlaceHolder(e.target.value)}
                        />
                    </div>
                    <div className="col-span-12">
                        <InputLabel htmlFor="info" label="Info text" required={false} />
                        <TextInput
                            map="info"
                            className="w-full"
                            value={info}
                            onChange={(e) => setInfo(e.target.value)}
                        />
                    </div>
                    <div className="col-span-6">
                        <InputLabel htmlFor="name" label="Name" required={true} />
                        <TextInput
                            map="name"
                            className="w-full"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="col-span-6">
                        <InputLabel htmlFor="label" label="Map" required={true} />
                        <TextInput
                            map="map"
                            className="w-full"
                            value={mapField}
                            onChange={(e) => setMapField(e.target.value)}
                        />
                    </div>
                    <div className="col-span-6">
                        <InputLabel htmlFor="width" label="Width" required={true} />
                        <select
                            name="width"
                            className="w-full border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm py-1.5"
                            value={width}
                            onChange={(e) => setWidth(e.target.value)}
                            
                        >
                            <option value={'full'}>Full</option>
                            <option value={'w-1/2'}>1/12</option>
                            <option value={'w-2/2'}>2/12</option>
                            <option value={'w-3/2'}>3/12</option>
                            <option value={'w-4/2'}>4/12</option>
                            <option value={'w-5/2'}>5/12</option>
                            <option value={'w-6/2'}>6/12</option>
                            <option value={'w-7/2'}>7/12</option>
                            <option value={'w-8/2'}>8/12</option>
                            <option value={'w-9/2'}>9/12</option>
                            <option value={'w-10/2'}>10/12</option>
                        </select>
                    </div>
                    <div className="col-span-6">
                        <InputLabel htmlFor="type" label="Type" required={true} />
                        <select
                            name="type"
                            className="w-full border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm py-1.5"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            
                        >
                            <option value={'native'}>Native</option>
                            <option value={'email'}>Email</option>
                            <option value={'simple_select'}>Select</option>
                            <option value={'textarea'}>Textarea</option>
                            <option value={'number'}>Number</option>
                        </select>
                    </div>
                    {type === 'simple_select' && <div className="col-span-6">
                        <InputLabel htmlFor="label" label="Options" required={true} />
                        <TextareaInput
                            map="options"
                            className="w-full border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm py-1.5"
                            value={getOptions(optionsList)}
                            onChange={(e) => setOptions(e.target.value)}
                        />
                    </div>}
                    <div className="col-span-12">
                        <ActionButton type="button" onClick={() => {
                            upDateElement()
                            }}>Save</ActionButton>
                    </div>
                </div>
            </>}
            {!showForm && <div className="p-4 cursor-pointer" onClick={() => setShowForm(!showForm)}>
                <Icon icon="edit" className="inline-block mr-2 h-6 w-6" />
                <p className="inline-block text-lg font-semibold pt-1">{element.label}</p>
            </div>}
        </div>
    );
}
