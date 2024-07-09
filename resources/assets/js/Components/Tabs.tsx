import classNames from "classnames";
import RowElement from "./RowElement"
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { RenderRow } from "./InteractionBuilder";

export default function Tabs(element: any, attachments: any) {
    return (element && <RowElement element={{
                width: 'full'
            }} wrapperClassName='flex-1' >
                <TabGroup>
                    <TabList className="flex space-x-1 rounded-sm bg-blue-900/20 p-0.5">
                        {element?.tabs && element?.tabs.map((tab) => {
                            return <Tab
                                className={({ selected }) =>
                                    classNames(
                                    'flex-0 px-12 rounded-sm py-2.5 text-sm font-medium leading-5',
                                    'ring-white/60 ring-offset-2 ring-offset-slate-400 focus:outline-none focus:ring-2',
                                    selected
                                        ? 'bg-white text-slate-800 shadow'
                                        : 'text-slate-500 hover:bg-white/[0.12] hover:text-slate-800'
                                    )
                                }>{tab.title}</Tab>
                        })}
                    </TabList>
                    <TabPanels>
                        {element?.tabs && element?.tabs.map((tab) => {
                            return <TabPanel
                                    className={classNames(
                                        'p-3 bg-blue-900/10',
                                    )}>
                                    <RenderRow row={tab.rows} attachment_values={attachments} />
                            </TabPanel>
                        })}
                    </TabPanels>
                </TabGroup>
            </RowElement>)
}