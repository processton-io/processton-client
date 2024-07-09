
import { useEffect, useState } from "react";
import { router, useForm  } from "@inertiajs/react";
import { postHeight } from "../../Utils/iframewapper_helper";
import { Disclosure, Tab, Transition } from "@headlessui/react";

import { WidgetForm, WidgetFormData, WidgetFormRowType, WidgetFormElementType, WidgetFormElementData, WidgetFormRowData, ShowWhenConditions } from "../../types";

import classNames from "classnames";
import RowElement from "../RowElement";
import Icon from "../Elements/AppIcon";

import ActionButton from "./ActionButton";
import InputLabel from "./InputLabel";
import InputError from "./InputError";
import InputField from "./InputField";
import axios from "axios";

import { toast } from 'react-toastify';

export default function FormBuilder({ form , submitAt, values = {} } : WidgetFormData) {
    console.log(form, values)
    const formElements = form.rows.reduce((result, row) => {
            let elements : WidgetFormElementData[] = [];
            if(row.type){
                if(row.type === WidgetFormRowType.ACCORDION || row.type === WidgetFormRowType.TABS){
                    row.tabs && row.tabs.forEach((tab) => {
                        tab.rows.forEach((trow) => {
                            trow.elements.forEach((element) => {
                                elements.push(element)
                            })
                        })
                    })
                }else if(row.type === WidgetFormRowType.SECTIONS){
                    row.sections && row.sections.forEach((tab) => {
                        tab.rows.forEach((trow) => {
                            trow.elements.forEach((element) => {
                                elements.push(element)
                            })
                        })
                    })
                }else if(row.type === WidgetFormRowType.ROW){
                    row.elements && row.elements.forEach((element) => {
                        elements.push(element)
                    })
                }
            }else{
                elements = row.elements;
            }
            
            elements.forEach(element => {
                
                if(element.type === WidgetFormElementType.AGE || element.type === WidgetFormElementType.DOB){
                    result[element.map] = values[element.map] ? values[element.map] : '|years';
                }else if(element.type === WidgetFormElementType.SIMPLE_SELECT){
                    result[element.map] = element.options.find(option => {
                        let exploded = element.map.split('.');
                        if(exploded.length == 1){
                            return option.value == values[element.map]
                        }else if(exploded.length == 2 && values[exploded[0]] && values[exploded[0]][exploded[1]]){
                            return option.value == values[exploded[0]][exploded[1]]
                        }else if(exploded.length == 3 && values[exploded[0]] && values[exploded[0]][exploded[1]] && values[exploded[0]][exploded[1]][exploded[2]]){
                            return option.value == values[exploded[0]][exploded[1]][exploded[2]]
                        }
                    });
                }else if(element.type === WidgetFormElementType.ONE_TO_MANY){
                    if(values[element.map]){
                        let relationalArray = [];
                        element.config.elements.forEach((el) => {
                            
                            values[element.map].forEach((vl, recordIndex) => {
                                if(!relationalArray[recordIndex]){
                                    relationalArray[recordIndex] = {}
                                }
                                if(vl[el.map] !== undefined){
                                    if(el.type === WidgetFormElementType.SIMPLE_SELECT){
                                        relationalArray[recordIndex][el.map] = vl[el.map] ? el.options.find(option => {
                                            return option.value == vl[el.map]
                                        }) : ''
                                    }else if(el.type === WidgetFormElementType.CHECKBOX){
                                        relationalArray[recordIndex][el.map] = vl[el.map] === 1 ? true : false
                                    }else{
                                        relationalArray[recordIndex][el.map] = vl[el.map]
                                    }
                                    
                                }else{
                                    console.log(el , " EL Not found")
                                }
                            })
                            
                            if(element.config.attachments){
                                Object.keys(element.config.attachments).forEach((key) => {
                                    values[element.map].forEach((vl, recordIndex) => {
                                        if(vl[key]){
                                            relationalArray[recordIndex][element.config.attachments[key]] = vl[key]
                                        }else{
                                            console.log(el , " Attachment Not found")
                                        }
                                    })
                                })
                            }
                        })
                        result[element.map] = relationalArray
                        // console.log(relationalArray)
                    }
                    // result[element.map] = values[element.map] ? element.options.find(option => {
                    //     return option.value == values[element.map]
                    // }) : '';
                }else{
                    const match = element.map.match(/(.+)\[(.+)\]/);
                    if(match){
                        if (!result[match[1]]) {
                            result[match[1]] = {};
                        }
                        
                        result[match[1]][match[2]] = values[match[1]] && values[match[1]][match[2]] ? values[match[1]][match[2]] : '';
                    }else{
                        let exploded = element.map.split('.');
                        
                        if(exploded.length === 1){
                            result[element.map] = values[element.map] ? values[element.map] : '';
                        }else if(exploded.length === 2){
                            result[element.map] = values[exploded[0]] && values[exploded[0]][exploded[1]] ? values[exploded[0]][exploded[1]] : '';
                        }else if(exploded.length === 3){
                            result[element.map] = values[exploded[0]] && values[exploded[0]][exploded[1]] && values[exploded[0]][exploded[1]][exploded[2]] ? values[exploded[0]][exploded[1]][exploded[2]] : '';
                        }
                        // console.log(element.map, result[element.map]);
                    }
                    
                }
                //
            });
            return result;
    }, {})
    
    const [processing, setProcessing] = useState(false);
    const [errors, setErrors] = useState({});
    
    const { data, setData, reset } = useForm(formElements);

    
    useEffect(() => {
        return () => {
          resetForm()  
        };
    }, []);

    const resetForm = () => {
        reset();
    }

    const setRelationData = (key, value) =>{
        
        let splited = key.split('.')
        let tempObj = data[splited[0]]

        if(splited.length === 1){
            
            tempObj = value
        }
        if(splited.length === 2){
            tempObj[splited[1]] = value
        }
        if(splited.length === 3){
            tempObj[splited[1]][splited[2]] = value
        }
        setData(splited[0], tempObj)
    }

    const addRelationData = (key, elemants) => {
        let newObject  = {};
        elemants.forEach(element => {
            newObject[element.map] = ''
        })
        let tempObj = data[key] ? data[key] : [];
        tempObj.push(newObject);
        console.log(tempObj)
        setData(key, tempObj)

        
        postHeight();
        
        
    }

    const submit = (e) => {
        
        e.preventDefault();
        
        setProcessing(true)
        setErrors({})

        const ToastNotification = toast.loading(
            form.type == 'create' ? 
                'Ceating'
                : form.type == 'edit' ? 
                'Updating'
                : form.type == 'delete' ? 
                'Deleting'
                : form.type == 'confirm' ? 
                'Confirming'
                : form.type == 'block' ? 
                'Blocking'
                : 'Submiting'
        );

        axios.post(submitAt, data, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },

        }).then((resp) => {
            
            if(resp?.data?.next){
                if(resp?.data?.next?.type){
                    if(resp?.data?.message){
                        toast.update(ToastNotification, {
                            render: resp?.data?.message, 
                            type: 'success',
                            isLoading: false,
                            autoClose: 5000
                        })
                    }
                    if(resp?.data?.next?.type === 'reload'){
                        router && router.reload()
                    }else if(resp?.data?.next?.type === 'redirect' && resp?.data?.next?.action){
                        router && router.visit(resp?.data?.next?.action)
                    }
                }
            }

        }).catch(({response}) => {
            if(response.status == 422){
                let errorstrings = {};
                Object.keys(response.data.errors).forEach((index) => {
                    console.log(index, response.data.errors[index])
                    errorstrings[index] = response.data.errors[index].join(', ')
                })
                setErrors(errorstrings)
            }
            toast.update(ToastNotification, {
                render: "Something went wrong 🤯", 
                type: 'error',
                isLoading: false,
                autoClose: 5000
            })
            
        }).finally(() => {
            setProcessing(false)
        });

    };

    return (<div className="bg-gray-50 shadow-md rounded-sm pt-4">
        <div className='flex-1 bg-clip-border'>
            <div className="px-4 text-gray-900">
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">{form.name}</h2>
            </div>
        </div>
        <form onSubmit={submit} className="pt-4">
            <FormBody form={form} data={data} errors={errors} addRelationData={addRelationData} setData={setData} setRelationData={setRelationData}/>
            <div className="flex items-right justify-end space-x-3 p-4 bg-gray-100">
                <ActionButton colorType = "secondary" variant="md" type="button" disabled={processing} onClick={() => resetForm()}>Reset</ActionButton>
                <ActionButton colorType = "primary" variant="md" type="submit" disabled={processing}>{ processing && <Icon className="animate-spin text-white"  icon="loader"   />}{
                    form.type == 'create' ? 
                    (processing ? 'Ceating' : 'Create')
                        : form.type == 'edit' ? 
                        (processing ? 'Updating' : 'Update') 
                        : form.type == 'delete' ? 
                        (processing ? 'Deleting' : 'Delete') 
                        : form.type == 'confirm' ? 
                        (processing ? 'Confirming' : 'Confirm') 
                        : form.type == 'block' ? 
                        (processing ? 'Blocking' : 'Block') 
                        : (processing ? 'Submiting' : 'Submit')
                }</ActionButton>
            </div>
        </form>
    </div>);
}

type FormBodyProps = {
    form : WidgetForm,
    data : any,
    errors : any,
    addRelationData : Function,
    setData : Function,
    setRelationData : Function

}

export function FormBody ({ form , data = [] , errors = {}, addRelationData, setData, setRelationData} : FormBodyProps) {
    console.log(form, data)
    return <>
        { form.rows.map((row , row_index) => {
            return <div>
                {validateShowWhen(row?.show_when, data) === true && <div>
                    {row.type ? <div className="px-4">
                        <>
                        {row.type === WidgetFormRowType.ACCORDION && row.tabs.map((tab) => {
                            return <Disclosure>
                                {({ open }) => (
                                    /* Use the `open` state to conditionally change the direction of an icon. */
                                    <div>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 mb-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                        {tab.title} 
                                        <Icon icon="chevron-right" className={`${open ? 'rotate-90 transform' : ''} h-5 w-5 text-blue-500 `} />
                                    </Disclosure.Button>
                                    <Transition
                                        show={open}
                                        enter="transition duration-100 ease-out"
                                        enterFrom="transform scale-95 opacity-0"
                                        enterTo="transform scale-100 opacity-100"
                                        leave="transition duration-75 ease-out"
                                        leaveFrom="transform scale-100 opacity-100"
                                        leaveTo="transform scale-95 opacity-0"
                                    >
                                        <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500 mb-2" static>
                                            { tab.rows.map((trow) => {
                                                return <FormElements row={trow} data={data} errors={errors} setData={setData} addRelationData={addRelationData} setRelationData={setRelationData} />
                                            })}
                                        </Disclosure.Panel>
                                    </Transition>
                                    </div>
                                )}
                            </Disclosure>
                        })}
                        {row.type === WidgetFormRowType.SECTIONS && <div className="gap-4 w-full grid grid-cols-12">
                            {row.sections.map((section) => {
                                return <div>
                                        {section.rows.map((srow) => {
                                            return <RowElement element={srow}>
                                                <FormElements row={srow} data={data} errors={errors} setData={setData} inside={true} addRelationData={addRelationData} setRelationData={setRelationData} />
                                            </RowElement>
                                        })}
                                    </div>
                            })}
                        </div>}
                        {row.type === WidgetFormRowType.TABS && <Tab.Group onChange={() => postHeight()}>
                                <Tab.List className="flex space-x-1 rounded-md p-1 border bg-white">
                                    {row.tabs.map((tab) => {
                                        return <Tab
                                            className={({ selected }) =>
                                                classNames(
                                                'flex-0 px-12 rounded-sm py-2.5 text-sm font-medium leading-5',
                                                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                                selected
                                                    ? 'bg-gray-100 text-slate-800 shadow'
                                                    : 'text-slate-500 hover:bg-gray-50'
                                                )
                                            }>{tab.title}</Tab>
                                    })}
                                </Tab.List>
                                <Tab.Panels className="mt-2">
                                    {row.tabs.map((tab) => {
                                        return <Tab.Panel
                                            className={classNames(
                                                'p-3 grid grid-cols-12 gap-4 rounded-sm shadow-md bg-white text-gray-500 text-sm',
                                            )}>{ tab.rows.map((trow) => {
                                                return <RowElement element={trow} >
                                                    <FormElements row={trow} data={data} errors={errors} setData={setData} inside={true} addRelationData={addRelationData} setRelationData={setRelationData} />
                                                </RowElement>
                                            })}
                                        </Tab.Panel>
                                    })}
                                </Tab.Panels>
                            </Tab.Group>
                        }
                        {row.type === WidgetFormRowType.ROW && <div>
                            {row.group_label ? <div className={classNames("flex flex-col md:flex-row my-4 py-4", {
                                'border-t': row_index != 0 
                            })}>
                                <div className="w-full md:w-2/12">
                                    <h4 className="px-4 pb-3 md:px-6 md:pb-0 text-md font-semibold">{row.group_label}</h4>
                                    {row.group_description && <h5 className="px-4 text-gray-500 pb-3 md:px-6 md:pb-0 text-sm">{row.group_description}</h5>}
                                </div>
                                <div className="w-full md:w-10/12">
                                    <FormElements row={row} data={data} errors={errors} setData={setData} addRelationData={addRelationData} setRelationData={setRelationData} />
                                </div>
                            </div> : <FormElements row={row} data={data} errors={errors} setData={setData} addRelationData={addRelationData} setRelationData={setRelationData} /> }
                        </div>}
                        </>
                    </div> :
                        <div>
                            {row.group_label ? <div className={classNames("flex flex-col md:flex-row my-4 py-4", {
                                'border-t': row_index != 0 
                            })}>
                                <div className="w-full md:w-2/12">
                                    <h4 className="px-4 pb-3 md:px-6 md:pb-0 text-md font-semibold">{row.group_label}</h4>
                                    {row.group_description && <h5 className="px-4 text-gray-500 pb-3 md:px-6 md:pb-0 text-sm">{row.group_description}</h5>}
                                </div>
                                <div className="w-full md:w-10/12">
                                    <FormElements row={row} data={data} errors={errors} setData={setData} addRelationData={addRelationData} setRelationData={setRelationData} />
                                </div>
                            </div> : <FormElements row={row} data={data} errors={errors} setData={setData} addRelationData={addRelationData} setRelationData={setRelationData} /> }
                        </div>
                    }
                    </div>}
            </div>
            
        })}
    </>
}

const validateShowWhen = (conditions : ShowWhenConditions[], data: any) => {
    
    if(conditions === undefined || data === undefined) return true

    if((conditions as Array<any>).length <= 0) return true;

    if(Array.isArray(data)){
        if((data as Array<any>).length <= 0) return true;
    }else if(typeof data === 'object'){
        if(Object.keys(data).length <= 0) return true;
    }
    

    let retVal = [];
    conditions.forEach((condition) => {
        
        let explodedIndexes = condition.key.split('.');
        let valueToCompare;

        if(explodedIndexes.length === 1) valueToCompare = data[explodedIndexes[0]];
        if(explodedIndexes.length === 2) valueToCompare = data[explodedIndexes[0]][explodedIndexes[1]];
        if(explodedIndexes.length === 3) valueToCompare = data[explodedIndexes[0]][explodedIndexes[1]][explodedIndexes[2]];
        if(explodedIndexes.length === 4) valueToCompare = data[explodedIndexes[0]][explodedIndexes[1]][explodedIndexes[2]][explodedIndexes[3]];
        
        if(condition.operator === 'EQUAL' || condition.operator === 'EQUALS'){
            retVal.push(valueToCompare == condition.value)
        }

        if(condition.operator === 'NOT_EQUAL' || condition.operator === 'NOT_EQUALS'){
            retVal.push(valueToCompare != condition.value)
        }

        if(condition.operator === 'IN'){
            retVal.push(condition.value.includes(valueToCompare))
        }
    })
    return retVal.includes(true)
}

type FormElementsProps = {
    row: WidgetFormRowData,
    data?: any,
    errors?: any[],
    setData : Function,
    inside?: boolean,
    addRelationData : Function,
    setRelationData : Function
};

export function FormElements ({row, data, errors, setData, inside=false,  addRelationData , setRelationData } : FormElementsProps) {

    const deleteElement = (key, index) => {
        let tempData = data[key];
        tempData.splice(index, 1);
        console.log(key, tempData);
        setData(key, tempData)
    };

    return <div className={classNames({
        "mb-4 px-4 w-full" : inside === false,
        "mb-4 w-full" : inside === true
    })}>
        {row.title && <div className="flex-1 w-full text-left text-sm font-medium text-blue-900">{row.title}</div>}
        <div className={(classNames("gap-4 w-full grid grid-cols-12", {
            // "flex flex-col md:flex-row justify-between mt-4" : inside === false,
            // "flex flex-col mt-2" : inside === true
        }))}>
            {row.elements.map((element) => {
                if(validateShowWhen(element?.show_when, data)){
                    return <RowElement element={element} >
                        
                        {
                        (
                            element.type != WidgetFormElementType.ONE_TO_MANY

                        ) &&
                            <div>
                                {(element.type != WidgetFormElementType.HIDDEN && element.type != WidgetFormElementType.CHECKBOX) && <InputLabel htmlFor={element.map} label={element.label} required={element?.required} /> }
                                <InputField
                                    element={element}
                                    data={data}
                                    setData={(map,value ) => setData(map, value)}
                                />
                            </div>
                        }
                        {(element.type === 'one-to-many') &&
                            <div className='border rounded-sm relative p-3'>
                                <InputLabel htmlFor={element.map} label={element.label} required={element?.required} className="absolute -top-3 left-0.5" />
                                
                                {data[element.map] && data[element.map].map((dat, index) => {
                                    return <div className={classNames("flex flex-row w-full my-1 border divide-x divide-double",{
                                            'bg-gray-100' : index % 2 == 0,
                                            'bg-gray-200' : index % 2 != 0,
                                        })}>
                                        { element.config.elements_label && <div className={classNames("flex-0 justify-center items-center h-full")}>
                                            <ActionButton colorType = "dangerous" type={"button"}  variant="xs" ><Icon icon='trash' className="h-4 w-4" onClick={() => deleteElement(element.map, index)} /></ActionButton>
                                            <p className="[writing-mode:vertical-lr] text-center text-sm p-1 py-2">{dat[element.config.elements_label]}</p>
                                        </div> }
                                        <div className="flex-1 grid grid-cols-12 gap-4 p-3">
                                            {element.config.elements.map((el) => {
                                                if(validateShowWhen(el?.show_when, dat)){
                                                    return <RowElement element={el} wrapperClassName="gap-4">
                                                        {(el.type != WidgetFormElementType.HIDDEN && el.type != WidgetFormElementType.CHECKBOX) && <InputLabel htmlFor={el.map} label={el.label} />}
                                                        <InputField
                                                                element={el}
                                                                data={dat}
                                                                setData={(map,value ) => setRelationData(element.map+'.'+index+'.'+map, value)}
                                                            /></RowElement>
                                                }
                                            })}
                                        </div>
                                    </div>
                                })}
                                {element.config.allow_new && <div className="flex flex-row-reverse mt-1">
                                    <ActionButton colorType = "primary" type={"button"} onClick={() => addRelationData(element.map, element.config.elements)} variant="xs"><Icon icon='plus' className="h-3 w-3" /> Add</ActionButton>
                                </div>}
                            </div>
                        }
                        

                        <InputError message={errors[element.map]} className="mt-2" />
                    </RowElement>
                }
            })}
        </div>
    </div>
}