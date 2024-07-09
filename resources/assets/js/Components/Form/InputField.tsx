import { forwardRef, useEffect, useRef, useState } from 'react';
import { RefObject } from 'react';
import TextInput from './TextInput';
import DateInput from './DateInput';
import AgeInput from './AgeInput';
import PhoneInput from './PhoneInput';
import TagsInput from './TagsInput';
import SelectInput from './SelectInput';
import Checkbox from './Checkbox';
import TextareaInput from './TextareaInput';
import AddressInput from './AddressInput';
import AmountInput from './AmountInput';
import SelectUrlInput from './SelectUrlInput';
import EmailInput from './EmailInput';
import RichTextInput from './RichTextInput';
import FormEditor from './FormEditor';
import SimpleSelectInput from './SimpleSelectInput';
import { WidgetFormElementData, WidgetFormElementType } from '../../types';
import NumberInput from './NumberInput';
import DecimalInput from './DecimalInput';
import PasswordInput from './PasswordInput';
import HiddenInput from './HiddenInput';
import DateOfBirthInput from './DateOfBirthInput';

type InputFieldProps = {
    element: WidgetFormElementData,
    setData: Function,
    data: any
}

export default forwardRef(function InputField({ element, setData, data } : InputFieldProps, ref) {
    
    const input = ref ? ref : useRef<HTMLInputElement>(null);

    const [value, setValue] = useState<any>();
    useEffect(() => {
        const match = element.map.match(/(.+)\[(.+)\]/);
        if(match){
            setValue(data[match[1]][match[2]]);
        }else{
            // let splited = element.map.split('.');
            // console.log(element.map, data, data[element.map])
            // if(splited.length === 1){
                setValue(data[element.map]);
            // }else{
            //     if(splited.length === 2){
            //         console.log(data[splited[0]][splited[1]]);
            //     }else{
            //         console.log(data[splited[0]][splited[1]][splited[2]]);
            //     }
            // }
            // if(splited.length == 2){
            //     if(splited.length == 3){
            //         console.log(data[splited[0]][splited[1]][splited[2]]);
            //     }else{
            //         console.log(data[splited[0]][splited[1]]);
            //     }
            // }else{
                
            // }
        }
    }, [data]);
    const changeValue = (key, val) => {
        console.log(key, val)
        const match = key.match(/(.+)\[(.+)\]/);
        if (match) {
            setData(match[1], { ...data[match[1]], [match[2]]: val})
        }else{
            setData(key, val)
        }
            
        
    }
    return (
        <>
            {( element.type === WidgetFormElementType.NATIVE || element.type === WidgetFormElementType.STRING || element.type === WidgetFormElementType.TEXT) &&
                <TextInput {...element}
                    key={element.map}
                    ref={input as RefObject<HTMLInputElement>}
                    value={data[element.map]}
                    placeholder={element.label}
                    className="mt-1 block w-full"
                    autoComplete={element.map}
                    disabled={element?.disabled}
                    onChange={(e) => changeValue(element.map, e.target.value)}
                />
            }
            {( element.type === WidgetFormElementType.NUMBER) &&
                <NumberInput {...element}
                    key={element.map}
                    ref={input as RefObject<HTMLInputElement>}
                    value={data[element.map]}
                    placeholder={element.label}
                    className="mt-1 block w-full"
                    autoComplete={element.map}
                    onChange={(e) => changeValue(element.map, e.target.value)}
                />
            }
            {( element.type === WidgetFormElementType.DECIMAL) &&
                <DecimalInput {...element}
                    key={element.map}
                    ref={input as RefObject<HTMLInputElement>}
                    value={data[element.map]}
                    placeholder={element.label}
                    className="mt-1 block w-full"
                    autoComplete={element.map}
                    onChange={(e) => changeValue(element.map, e.target.value)}
                />
            }
            {(element.type === WidgetFormElementType.AMOUNT || element.type === WidgetFormElementType.MONEY) &&
                <AmountInput {...element}
                    key={element.map}
                    ref={input as RefObject<HTMLInputElement>}
                    value={data[element.map]}
                    className="mt-1 block w-full"
                    autoComplete={element.map}
                    onValueChange={(value) => changeValue(element.map, value)}
                />
            }
            {(element.type === WidgetFormElementType.TEXT_AREA) &&
                <TextareaInput {...element}
                    key={element.map}
                    ref={input as RefObject<unknown> as RefObject<HTMLTextAreaElement>}
                    value={data[element.map]}
                    placeholder={element.label}
                    className="mt-1 block w-full"
                    autoComplete={element.map}
                    onChange={(e) => changeValue(element.map, e.target.value)}
                />
            }
            {(element.type === WidgetFormElementType.PASSWORD) &&
                <PasswordInput {...element}
                    key={element.map}
                    ref={input as RefObject<HTMLInputElement>}
                    value={data[element.map]}
                    placeholder={element.label}
                    className="mt-1 block w-full"
                    autoComplete={element.map}
                    onChange={(e) => changeValue(element.map, e.target.value)}
                />
            }
            {(element.type === WidgetFormElementType.HIDDEN) &&
                <HiddenInput {...element}
                    key={element.map}
                    ref={input as RefObject<HTMLInputElement>}
                    value={data[element.map]}
                    placeholder={element.label}
                    className="mt-1 block w-full"
                    autoComplete={element.map}
                    onChange={(e) => changeValue(element.map, e.target.value)}
                />
            }
            {/* {(element.type === 'relation') &&
                <TextInput
                    id={element.map}
                    type='text'
                    name={element.map}
                    value={data[element.map]}
                    placeholder={element.label}
                    className="mt-1 block w-full"
                    autoComplete={element.map}
                    
                    onChange={(e) => changeValue(element.map, e.target.value)}
                />
            } */}
            {(element.type === WidgetFormElementType.DATE) &&
                <DateInput {...element}
                    key={element.map}
                    ref={input as RefObject<HTMLInputElement>}
                    value={data[element.map]}
                    placeholder={element.label}
                    className="mt-1 block w-full"
                    autoComplete={element.map}
                    onChange={(e) => changeValue(element.map, e)}
                />
            }
            {(element.type === WidgetFormElementType.AGE || element.type === WidgetFormElementType.DOB) &&
                <AgeInput {...element}
                    key={element.map}
                    ref={input as RefObject<HTMLInputElement>}
                    value={data[element.map]}
                    placeholder={element.label}
                    className="mt-1 block w-full"
                    autoComplete={element.map}
                    onChange={(e) => changeValue(element.map, e)}
                />
            }
            {(element.type === WidgetFormElementType.AGE) &&
                <DateOfBirthInput {...element}
                    key={element.map}
                    ref={input as RefObject<HTMLInputElement>}
                    value={data[element.map]}
                    placeholder={element.label}
                    className="mt-1 block w-full"
                    autoComplete={element.map}
                    onChange={(e) => changeValue(element.map, e)}
                />
            }
            {(element.type === WidgetFormElementType.PHONE) &&
                <PhoneInput
                    key={element.map}
                    map={element.map}
                    value={data[element.map]}
                    placeholder={element.label}
                    className="mt-1 block w-full"
                    autoComplete={element.map}
                    onChange={(e) => changeValue(element.map, e)}/>
            }
            {(element.type === WidgetFormElementType.TAGS) &&
                <TagsInput {...element}
                    key={element.map}
                    ref={input as RefObject<HTMLInputElement>}
                    label={element.label}
                    options={element.options}
                    value={data[element.map]}
                    className="mt-1 block w-full"
                    handleInputChange={(e) => changeValue(element.map, e)}/>
            }
            {(element.type === WidgetFormElementType.SIMPLE_SELECT) &&
                <SimpleSelectInput {...element}
                    key={element.map}
                    ref={input as RefObject<HTMLInputElement>}
                    value={data[element.map]}
                    placeholder={element.label}
                    className="mt-1 block w-full"
                    options={element.options}
                    autoComplete={element.map}
                    onChange={(e) => changeValue(element.map, e)}/>
            }
            {(element.type === WidgetFormElementType.SELECT) &&
                <SelectInput {...element}
                    key={element.map}
                    ref={input as unknown as RefObject<HTMLSelectElement>}
                    value={data[element.map]}
                    placeholder={element.label}
                    className="mt-1 block w-full"
                    options={element.options}
                    autoComplete={element.map}
                    onChange={(e) => changeValue(element.map, e)}/>
            }
            {(element.type === WidgetFormElementType.URL_SELECT) &&
                <SelectUrlInput  {...element}
                    key={element.map}
                    ref={input as unknown as RefObject<HTMLSelectElement>}
                    value={data[element.map]}
                    placeholder={element.label}
                    className="mt-1 block w-full"
                    url={element.url}
                    onChange={(e) => changeValue(element.map, e)}/>
            }
            {(element.type === WidgetFormElementType.ADDRESS) &&
                <AddressInput {...element}
                    key={element.map}
                    ref={input as RefObject<HTMLInputElement>}
                    value={data[element.map]}
                    placeholder={element.label}
                    className="mt-1 block w-full"
                    options={element.options}
                    onChange={(e) => changeValue(element.map, e)}/>
            }
            {(element.type === WidgetFormElementType.EMAIL_EDITOR) &&
                <EmailInput {...element}
                    key={element.map}
                    ref={input as RefObject<HTMLInputElement>}
                    value={data[element.map]}
                    placeholder={element.label}
                    className="mt-1 block w-full"
                    onChange={(e) => changeValue(element.map, e)}/>
            }
            {(element.type === WidgetFormElementType.RICH_TEXT_EDITOR) &&
                <RichTextInput {...element}
                    key={element.map}
                    value={data[element.map]}
                    placeholder={element.label}
                    className="mt-1 block w-full"
                    onChange={(e) => changeValue(element.map, e)}/>
            }
            {(element.type === WidgetFormElementType.FORM_EDITOR) &&
                <FormEditor {...element}
                    key={element.map}
                    value={data[element.map]}
                    placeholder={element.label}
                    className="mt-1 block w-full"
                    onChange={(e) => changeValue(element.map, e)}/>
            }
            { (element.type === WidgetFormElementType.CHECKBOX) && 
                <div className="block mt-4">
                    <Checkbox
                        name={element.map}
                        label={element.label}
                        value={value}
                        onChange={(value) => {
                            changeValue(element.map, value)
                        }}
                    />
                </div>
            }
            {element.info && <p className="mt-2 text-sm text-gray-500">{element.info}</p> }
        </>
    );
});
