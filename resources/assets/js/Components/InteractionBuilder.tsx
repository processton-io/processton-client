import RowElement from '../Components/RowElement';
import { ElementTypes, Interaction } from '../types';
import { Suspense, lazy, useEffect, useState } from 'react';
import classNames from 'classnames';
import AppIcon from './Elements/AppIcon';
import Tabs from './Tabs';

const StatsCard = lazy(() => import('../Components/StatsCard'));
const Card = lazy(() => import('./Card/Card'));
const FormBuilder = lazy(() => import('./Form/FormBuilder'));
const GridBuilder = lazy(() => import('./Grid/GridBuilder'));
const DataTable = lazy(() => import('./DataTable'));


export default function InteractionBuilder(interaction:Interaction) {
    
    return <div className="mx-auto ">
        <RenderRow row={interaction.schema.elements} attachment_values={interaction.attachment_values} />
    </div>;
}


export function RenderRow({ row, attachment_values = []}) {
    console.log(row)
    return (
        <div className="grid grid-cols-12 gap-4">
            {row && row.map((element) => {
                return (
                    <>
                        <RowElement element={element} wrapperClassName='p-0'>
                            <RenderWidget element={element} attachment_values={attachment_values} />
                        </RowElement>
                    </>
                );
            })}
        </div>
    );
}

export function RenderWidget({ element , attachment_values}) {
    
    const [data, setData] = useState(element?.data);
    const [loading, setLoading] = useState(true);

    function objectToQueryString(obj) {
        const keys = Object.keys(obj);
        const keyValuePairs = keys.map(key => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
        });
        return keyValuePairs.join('&');
    }

    useEffect(() => {
        if(element.srcOfData && element.srcOfData.api_endpoint){
            let urltofetch = element.srcOfData.api_endpoint;
            if(element.srcOfData.attachments){

                let attachments_final = {};
                element.srcOfData.attachments.forEach(attachment => {
                    attachments_final[attachment.key] = attachment_values[attachment.value] || attachment_values[attachment.value] === '' ? attachment_values[attachment.value] : attachment_values[attachment.value] = attachment_values[attachment.value];
                });

                
                urltofetch += ('?'+ objectToQueryString(attachments_final));
            }
            fetch(urltofetch).then(response => response.json()).then(json => {
                setData(json.data)
                setLoading(false)
            });
        }else{
            setLoading(false)
        }
    }, [element]);
    console.log(element)
    switch (element.type) {
        case ElementTypes.STATS_CARD:
            return <Suspense fallback={<LoadingStatsCard />}>
                    {loading ? <LoadingStatsCard /> : <StatsCard {...element} data={data} />}
                </Suspense>
        
        case ElementTypes.CARD:
            console.log(element)
            return <Suspense fallback={<Loading className="py-1" />}>
                    {loading ? <Loading className="py-1" /> : <Card {...element}  data={data} />}
                </Suspense>

        case ElementTypes.FORM:
            return <Suspense fallback={<Loading className="py-1" />}>
                    {loading ? <Loading className="py-1" /> : <FormBuilder {...data}  />}
                </Suspense>
        
        case ElementTypes.GRID:
            return <Suspense fallback={<Loading className="py-1" />}>
                    {loading ? <Loading className="py-1" /> : <GridBuilder {...data}  />}
                </Suspense>

        case ElementTypes.ROW:
            return <Suspense fallback={<Loading className="py-1" />}>
                    {loading ? <Loading className="py-1" /> : <RenderRow row={element.elements} attachment_values={attachment_values} />}
                </Suspense>
        case ElementTypes.TEXT:
            return <Suspense fallback={<Loading className="py-1" />}>
                {loading ? <Loading className="py-1" /> : <p className="text-sm text-gray-600">{data}</p>}
            </Suspense>
        case ElementTypes.DATA_TABLE:
            return <Suspense fallback={<LoadingDataTable />}>
                {loading ? <LoadingDataTable /> : <DataTable {...data} />}
            </Suspense>
        case ElementTypes.TABS:
            return <Suspense fallback={<Loading className="py-1" />}>
                {loading ? <Loading className="py-1" /> : <Tabs {...element} attachment={attachment_values} />}
            </Suspense>
        default:
            return <Loading className="py-8" />
    }
}

function Loading({className = ''}) {
    return (
        <div className={classNames('w-full text-center', className)}>
            <AppIcon icon="loading" className="animate-spin h-12 w-12 text-red" />
        </div>
    );
}


export function LoadingStatsCard({}) {

    return (
        <div className="w-full p-0 m-0 bg-white border h-full flex flex-col">
            <div className="min-w-0 break-words my-auto">
                <div className="flex-auto">
                    <div className="flex flex-wrap">
                        <div className="pr-4 flex-1 flex-grow flex flex-row space-x-2">
                            <div className="h-14 bg-gray-200 animate-pulse w-1/2"></div>
                            <div className="h-14 bg-gray-200 animate-pulse w-1/2"></div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export function LoadingDataTable({}) {

    return (
        <div className="w-full p-0 m-0 bg-white border h-full flex flex-col">
            <div className="min-w-0 break-words my-auto">
                <div className="flex-auto">
                    <div className="flex flex-col">
                        <div className="pr-4 flex-1 flex-grow flex flex-row space-x-2">
                            <div className="h-14 bg-gray-200 animate-pulse w-1/2"></div>
                            <div className="h-14 bg-gray-200 animate-pulse w-1/2"></div>
                        </div>
                        
                        <div className="pr-4 flex-1 flex-grow flex flex-col pt-2">
                            <div className="h-36 bg-gray-200 animate-pulse"></div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}