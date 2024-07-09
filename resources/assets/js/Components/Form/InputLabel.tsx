import { LabelProps } from "../../types";

type InputLabelProps = LabelProps & {
    className?: string;
    children?: JSX.Element;
}

export default function InputLabel({ label = '', required = false, className = '', htmlFor='', children = <></>, ...props }: InputLabelProps) {
    return (
        <label {...props} className={`block font-medium text-sm text-gray-700 ` + className} htmlFor={htmlFor}>
            {label ? label : children} {(required === true) && <span className="text-red-500">*</span>}
        </label>
    );
}
