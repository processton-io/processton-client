import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, href = "#",  ...props }) {
    return (
        <Link
            href={href}
            {...props}
            className={
                active + ' inline-flex items-center px-4 border-b-2 border-t text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none min-w-xxxs max-w-xxs text-center ' + 
                (active
                    ? 'border-indigo-400 text-gray-900 focus:border-indigo-700 bg-indigo-100  hover:bg-indigo-200 '
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ') +
                className
            }
        >
            {children} {active}
        </Link>
    );
}

export function NavLinkSimple({ active = false, className = '', children, href = "#",  ...props }) {
    return (
        <Link
            href={href}
            {...props}
            className={
                active + ' inline-flex items-center px-4 text-sm font-medium leading-5 transition duration-150 ease-in-out min-w-xxxs max-w-xxs text-center ' + 
                (active
                    ? 'text-gray-900 '
                    : 'text-gray-500 hover:text-gray-700 ') +
                className
            }
        >
            {children} {active}
        </Link>
    );
}


export function NavLinkSide({ active = false, className = '', children, href = "#",  ...props }) {
    return (
        <Link
            href={href}
            {...props}
            className={
                active + ' flex items-center text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ' + 
                (active
                    ? 'text-gray-900 '
                    : 'text-gray-500 hover:text-gray-700 ') +
                className
            }
        >
            {children} {active}
        </Link>
    );
}