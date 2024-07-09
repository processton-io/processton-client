import { WidgetGridData, WidgetGridItemData } from '../../types';
import React from 'react';
import RowElement from '../RowElement';
import { Link } from '@inertiajs/react';
import AppIcon from '../Elements/AppIcon';

const SimpleGridItem: React.FC<WidgetGridItemData> = (element) => {
    return (
            <>
                <RowElement element={element} wrapperClassName='p-0'>
                    <Link href={element.link} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-sm shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        {element.title && <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{element.title}</h5>}
                        {element.subtitle && <p className="font-normal text-gray-700 dark:text-gray-400">{element.subtitle}</p>}
                    </Link>
                </RowElement>
            </>
        );
}

const IconGridItem: React.FC<WidgetGridItemData> = (element) => {

    return (
            <>
                <RowElement element={element} wrapperClassName='p-0'>
                    <Link href={element.link} className='text-center flex-0 flex flex-col align-middle justify-center cursor-pointer w-20 mx-auto'>
                        <div className="block text-center mb-2 w-20">
                            <div className='p-2 shadow-md rounded-lg bg-gradient-to-tl from-indigo-700 to-blue-500 text-white inline-block'>
                                <AppIcon icon={element.icon} className={'inline'} />
                            </div>
                        </div>
                        <span className='flex-block text-xs text-center w-20'>{element.title}</span>
                    </Link>
                </RowElement>
            </>)
}

const GenerateGridItem: React.FC<WidgetGridItemData> = (element) => {
    switch (element.type) {
        case 'icon':
            return <IconGridItem {...element} />
        default:
            return <SimpleGridItem {...element} />
    }
}


const MyComponent: React.FC<WidgetGridData> = ({header , items}) => {

    console.log(header, items);
    return (
        <div className="w-full h-full flex flex-col">
            {header && <>
                {header.title && <h3 className="text-lg font-bold">{header.title}</h3>}
            </>}
            <div className="grid grid-cols-12 gap-4 mt-4">
                {items && Array.isArray(items) && items.map((element) => {
                    return (
                        <GenerateGridItem {...element} />
                    );
                })}
            </div>
        </div>
    );
};

export default MyComponent;