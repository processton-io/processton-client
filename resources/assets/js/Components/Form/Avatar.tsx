import { forwardRef, useEffect, useState, useRef } from 'react';
import { WidgetFormElementData } from '../../types';

type AvatarInputProps = WidgetFormElementData & {
    isFocused?: boolean;
    className?: string;
    changeValue?: (image: string|File) => void;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    autoComplete?: string;
    
};

export default forwardRef(function Avatar({ value, className = '', isFocused = false, label="Select file", ...props } : AvatarInputProps, ref: React.RefObject<HTMLInputElement>) {
    const input = ref ? ref : useRef();

    
    const [image, setImage] = useState<File>();
    const [image_url] = useState(value);

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    useEffect(() => {
        props.changeValue(image)
    }, [image]);

    return (
        <div className="mt-1">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    {(image || image_url) ? <img src={image ? URL.createObjectURL(new Blob([image])): (typeof image_url === 'string' ? URL.createObjectURL(new Blob([image_url])) : image_url)} 
                        className={
                            'h-36 w-36 border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm ' +
                            className
                        }
                        onClick={() => input.current?.click()}
                        alt="Avatar" /> : <div className="text-xl py-12 h-36 w-36 text-center border border-dotted border-3 border-gray-300 text-gray-300" onClick={() => input.current?.click()} >
                            <p>{label}</p>
                            </div>}
                        <input type="file" 
                                name="user_image"
                                onChange={(e) => setImage(e.target.files[0])}
                                accept="image/*"
                                ref={input}
                                className="form-control hidden" />
                </div>
            </div>
    );
});
