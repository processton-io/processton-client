import IFrameWindow from '../Components/IFrameWindow';
import RowElement from '../Components/RowElement';
import AppLayout from '../Layouts/AppLayout';
import { Tab } from "@headlessui/react";
import classNames from 'classnames';
import { postHeight } from '../Utils/iframewapper_helper';
import ActionItem from '../Components/ActionItem';
import { Link } from '@inertiajs/react';
import Icon from '../Components/Elements/AppIcon';
import Datepicker from 'react-tailwindcss-datepicker';
import { useState } from 'react';

export default function Interaction({ auth, application, org, applications, interaction , attachments}) {

    const currentDate = new Date();
    const [dateTimeValue, setDateTimeValue] = useState({ 
        startDate: new Date(currentDate. getTime() - 30 * 24 * 60 * 60 * 1000),
        endDate: currentDate
    }); 

    const handleDateChange = (newValue) => { 
        setDateTimeValue(newValue); 
    } 
    const configs = {
        footer: {
            cancel: "Cancel", 
            apply: "Apply" 
        }
    };
    
    const headerActions = interaction.header_actions && interaction.header_actions.length > 0 ? interaction.header_actions.map((column) => {
        return {
            'type': column.type,
            'label': column.label,
            'button': column.button,
            'action': column.action_link,
            'attachments': column.attachments.map((attachment) => {
                
                return {
                    'key' : attachment.key,
                    'value' : attachment.value
                }
            })
        }
    }): []

    const breadCrumbs = interaction.breadcrumbs && interaction.breadcrumbs.length > 0 ? interaction.breadcrumbs.map((column) => {
        return {
            'type': column.type,
            'label': column.label,
            'button': column.button,
            'icon': column.icon,
            'action': column.action_link,
            'attachments': column.attachments.map((attachment) => {
                
                return {
                    'key' : attachment.key,
                    'value' : attachment.value
                }
            })
        }
    }): []
    
    return (
        <AppLayout
            user={auth.user}
            org={org}
            application={application}
            applications={applications}
            title={interaction.name}
        >
            {(headerActions.length > 0 || breadCrumbs.length > 0) && <div className='flex-1 bg-white border-b-2 border-t border-l pb-1 shadow-inner'>
                <div className="pb-0 pt-1  px-4 text-gray-900 flex flex-col md:flex-row text-right align-rightpr-6">
                    <nav className="flex flex-1 flex-col " aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse h-8">
                            {breadCrumbs.map((crumb, index) => {
                                return <li className="inline-flex items-center">
                                    {index > 0 && <Icon icon="chevron-right" className="w-4 h-4 mr-2" />}
                                    <Link href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-white">
                                        {(index <= 0 && crumb.icon) && <Icon icon={crumb.icon} className="w-4 h-4 mr-2" />}
                                        {crumb.label}
                                    </Link>
                                </li>
                            })}
                            
                        </ol>
                        <div className='flex-1 text-left'>
                            <div className="flex-1">
                                <h2 className='ml-1 mt-1 mb-2 inline-flex items-center text-md text-gray-700 dark:text-gray-400'>{interaction.name}</h2>
                            </div>
                        </div>
                    </nav>

                    <div className="flex flex-col space-y-1">
                        <ol className="inline-flex items-right space-x-1 md:space-x-2 rtl:space-x-reverse h-8">
                            {headerActions.map((action) => {
                                if(action.type != 'date_range'){
                                    return <li className="inline-flex items-center">
                                        <ActionItem action={action} data={action.data} icon={action.icon} />
                                    </li>
                                }else{
                                    return <></>
                                }
                            })}
                        </ol>
                        <ol className="inline-flex items-right space-x-1 md:space-x-2 rtl:space-x-reverse">
                            {headerActions.map((action) => {
                                if(action.type == 'date_range'){
                                    return <li className="inline-flex items-center w-full">
                                        <Datepicker
                                            inputClassName={"border border-gray-300 focus:border-indigo-500 text-xs focus:ring-indigo-500 rounded-sm shadow-sm py-1 w-full px-4 pr-8"}
                                            value={dateTimeValue}
                                            configs={configs}
                                            onChange={handleDateChange}
                                            primaryColor={"indigo"}
                                            showShortcuts={true}
                                        /> 
                                    </li>
                                }else{
                                    return <></>
                                }
                            })}
                        </ol>
                    </div>
                </div>
            </div>}
            <div className='w-full flex flex-col p-2 md:p-4 gap-4'>
                {interaction.rows.map((row) => {

                    return <div className='w-full grid grid-cols-12 gap-4'>
                        {row.elements.map((element) => {
                            if(element.element_type === "datatable"){
                                return <RowElement element={element} wrapperClassName="p-4 flex-1" ><IFrameWindow src={route('app.element.datatable',{
                                        app_slug: application.slug,
                                        element_slug: element.element_slug,
                                        ...attachments
                                    })} /></RowElement>
                            }else if(element.element_type === "form"){
                                return <RowElement element={element} wrapperClassName="p-4 flex-1" ><IFrameWindow src={route('app.element.form',{
                                        app_slug: application.slug,
                                        element_slug: element.element_slug,
                                        ...attachments
                                    })} /></RowElement>
                            }else if(element.element_type === "custom"){
                                return <RowElement element={element} wrapperClassName="p-4 flex-1" ><IFrameWindow src={route(element.element_slug,{
                                        app_slug: application.slug,
                                        element_slug: element.element_slug,
                                        ...attachments,
                                        startDate: dateTimeValue.startDate,
                                        endDate: dateTimeValue.endDate
                                    })} /></RowElement>
                            }else if(element.element_type === "tabs"){
                                console.log(element)
                                return <RowElement element={{
                                    width: 'full'
                                }} wrapperClassName='flex-1' >
                                    <Tab.Group onChange={() => postHeight()}>
                                        <Tab.List className="flex space-x-1 rounded-sm bg-blue-900/20 p-1 mt-6">
                                            {element.tabs.map((tab) => {
                                                return <Tab
                                                    className={({ selected }) =>
                                                        classNames(
                                                        'flex-0 px-12 rounded-sm py-2.5 text-sm font-medium leading-5',
                                                        'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                                        selected
                                                            ? 'bg-white text-slate-800 shadow'
                                                            : 'text-slate-500 hover:bg-white/[0.12] hover:text-white'
                                                        )
                                                    }>{tab.title}</Tab>
                                            })}
                                        </Tab.List>
                                        <Tab.Panels className="mt-2">
                                            {element.tabs.map((tab) => {
                                                return <Tab.Panel
                                                        className={classNames(
                                                            'p-3 grid grid-cols-12 gap-4 rounded-sm shadow-md bg-white text-gray-500 text-sm',
                                                        )}>
                                                        <RowElement element={tab} wrapperClassName='flex-1 p-4' ><IFrameWindow src={route(tab.element_slug,{
                                                            app_slug: application.slug,
                                                            element_slug: tab.element_slug,
                                                            ...attachments
                                                        })} /></RowElement>
                                                </Tab.Panel>
                                            })}
                                        </Tab.Panels>
                                    </Tab.Group>
                                </RowElement>
                            }
                        })}
                    </div>

                })}
            </div>
        </AppLayout>
    );
}
