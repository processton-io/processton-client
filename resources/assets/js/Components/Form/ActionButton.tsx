import AppIcon from '../Elements/AppIcon';
import { ButtonProps } from '../../types'
import classNames from 'classnames';

export default function ActionButton({type, colorType = "primary",variant= "sm", disabled, label = '', icon, className = '',children, onClick} : ButtonProps){


    return <button
        type={type as "button" | "submit" | "reset"} 
        className={ classNames(
            `inline-flex items-center  focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${
                disabled && 'opacity-25'
            }` , {
                'bg-white border border-gray-300 rounded-sm font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 ' : colorType == 'secondary',
                'bg-gray-800 border border-transparent rounded-sm text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500': colorType == 'primary',

                'bg-gradient-to-r from-yellow-500 to-orange-500 border border-gray-300 rounded-sm font-semibold text-xs text-white uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500' : colorType == 'warning',
                'bg-gradient-to-r from-lime-500 to-green-500 border border-gray-300 rounded-sm font-semibold text-xs text-white uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500': colorType == 'success',
                'bg-gradient-to-r from-red-400 to-red-700 border border-gray-300 rounded-sm font-semibold text-xs text-white uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500' : colorType == 'dangerous',
                'px-1 py-1 font-semibold text-xs' : variant == 'xs',
                'px-2 py-1 font-semibold text-xs' : variant == 'sm',
                'px-4 py-2 font-semibold text-xs' : variant == 'md'
            }, className)
        }
        disabled={disabled}
        onClick={onClick}
    >
        {children ? <>
            {children}
        </> : <>
            {(icon && icon != '') && <AppIcon icon={icon} className={"w-3 h-3 mr-2 " + className} />}
            {label}
        </>}
    </button>
    

}
