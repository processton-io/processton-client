import { useState } from "react";
// import SelectMultipleInput from "./Form/SelectMultipleInput";
import InputLabel from "./Form/InputLabel";
import TextInput from "./Form/TextInput";
import SelectInput from "./Form/SimpleSelectInput";
import ActionItem from "./ActionItem";
// import Pagination from "./Pagination";
import classNames from "classnames";
import Icon from "./Elements/AppIcon";
import { WidgetDataTableData } from "../types";
import ActionButton from "./Form/ActionButton";

type DataTableProps = WidgetDataTableData & {
    
}

export default function DataTable({
    data,
    config,
    columns =[],
    selectedCols = [],
    filters = [],
    actions =[],
    actionsLabel="Actions"
}: DataTableProps) {

    let processedCols = [];
    let processedSelectedCols = [];

    if(columns.length <= 0){
        let referenceColumn = data.data[0];
        let keys = Object.keys(referenceColumn);
        let ignoreList = ["id", "created_at", "updated_at"];
        
        keys.forEach((key) => {
            
            if(typeof referenceColumn[key] === 'string' || typeof referenceColumn[key] === 'number'){
                if(!ignoreList.includes(key) && !key.endsWith("_id")){
                    processedSelectedCols.push({
                        value: key,
                        label: key,
                    })
                }
                processedCols.push({
                    value: key,
                    label: key,
                })
            }else if(typeof referenceColumn[key] === 'object'){

                if(referenceColumn[key]){
                    let SecondLevelkeys = Object.keys(referenceColumn[key]);

                    SecondLevelkeys.forEach((Skey) => {
                        if(!ignoreList.includes(Skey) && !Skey.endsWith("_id")){
                            processedSelectedCols.push({
                                value: key+'.'+Skey,
                                label: key+' '+Skey,
                            })
                        }
                        processedCols.push({
                            value: key+'.'+Skey,
                            label: key+' '+Skey,

                        })
                    })
                }

            }
            
        })

    }else{
        if(selectedCols.length > 0){

            processedCols = columns
            processedSelectedCols = selectedCols

        }else{
            processedCols = columns
            processedSelectedCols = columns
        }
        
    }



    const [selectedColumns] = useState(processedSelectedCols)
    
    return (
        <div className="overflow-hidden bg-white border">
            <div className="before-table">
                {(
                    (config.enableColumnsSelection && config.enableColumnsSelection == true)
                    || (config.enableSearch && config.enableSearch == true)
                ) && 
                    <div className="flex w-full py-4 px-6 space-x-4 border-b border-gray-300" >
                        {(
                            config.enableColumnsSelection && 
                            config.enableColumnsSelection == true
                        ) && 
                            <div className="flex-1 md:w-1/2">
                                <InputLabel label="Columns"></InputLabel>
                                {/* <SelectMultipleInput 
                                    map="select_columns"
                                    value={selectedColumns} // Convert the array to a string
                                    options={processedCols}
                                    onChange={(e) => setSelectedColumns(e)} // Convert the string back to an array
                                    className="mt-1 block w-full" /> */}
                            </div>
                        }
                        {(
                            config.enableSearch && 
                            config.enableSearch == true
                        ) && 
                            <div className="flex-1 flex space-x-4 md:w-1/2">
                                <div className="flex-1">
                                    <InputLabel htmlFor="search" label="Search"></InputLabel>
                                    <TextInput 
                                        map="search"
                                        className="mt-1 block w-full" />
                                </div>
                                <div className="space-x-2 pt-6 flex-0">
                                    <ActionButton type="primary" className="py-2.5">Search</ActionButton>
                                    {filters.length > 0 && <ActionButton type="secondary"  className="py-2.5">Advance Filter</ActionButton> }
                                </div>
                            </div>
                        }
                    </div>
                }
                {(config.enableFilter && config.enableFilter == true) && 
                    <div className="flex w-full py-4 px-6 space-x-4 bg-gray-50 dark:bg-gray-700  border-b border-gray-300" >
                        {filters.map((filter) => {
                            return <div className="flex-1 flex flex-col">
                                <InputLabel htmlFor={filter.value} >{filter.label}</InputLabel>
                                {filter.type === 'text' && 
                                    <TextInput 
                                        key={filter.value}
                                        map={filter.value}
                                        className="mt-1 block w-full" />
                                }
                                {filter.type === 'options' && 
                                    <SelectInput
                                        key={filter.value}
                                        map={filter.value}
                                        options={filter.options}
                                        className="mt-1 block w-full" />
                                }
                            </div>
                        })}
                    </div>
                }
            </div>

            <div className="hidden sm:block relative overflow-x-auto">
                {data.data.length > -1 && <Table data={data.data} total={data.total} columns={selectedColumns} actions={actions} actionsLabel={actionsLabel} />}
            </div>
            <div className="block sm:hidden">
                {data.data.length > 0 && <ResponsiveTable data={data.data} total={data.total} columns={selectedColumns} actions={actions} />}
            </div>
            {/* {data.total > data.per_page &&<div className="pagination">
                <Pagination data={data} application={application} />
            </div> } */}
        </div>
    );
}

function ResponsiveTable({data, columns, actions, total}){
    
    
    return (
        <div className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <div className="border-t border-dotted space-y-3">
                {data.map((row) => {
                    return (<div  className="bg-white border border-dotted bottom-t-0 dark:bg-gray-900 dark:border-gray-700">
                       {columns.map((col) => {
                            return <div className="flex border-b border-dotted"><div className="flex-0 w-1/3 px-6 py-4 font-medium text-black  dark:text-white">{col.label}</div><div className="px-6 py-4 font-medium text-gray-900  dark:text-white">
                                {generateValue(col.value, row)}
                            </div></div>
                        })} 
                        { actions.length > 0 &&
                            <div className="bg-gray-50"><div className="px-6 py-2 border-t border-dotted font-medium text-gray-900  dark:text-white space-x-1 text-right">
                                
                                {actions.map((action) => {
                                    return <ActionItem data={row} action={action} />
                                })}
                            </div></div>
                        }
                    </div>)
                })}
            </div>
            <div className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <div>
                    <div className="px-6 py-3 text-right">
                        Showing {data.length} of {total}
                    </div>
                </div>
            </div>
        </div>
    )
}

function Table({data, columns, actions, actionsLabel, total}){
    
    return (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    {columns.map((col) => {
                        return <th scope="col" className="px-6 py-3">{col.label}</th>
                    })}
                    {actions.length > 0 && <th scope="col" className="px-6 py-3 text-right">{actionsLabel}</th>}
                </tr>
            </thead>
            <tbody>
                {data.length > 0 && data.map((row) => {
                    return (<tr  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                       {columns.map((col) => {
                            return <DynamicTD col={col} row={row} />
                            
                        })} 
                        { actions.length > 0 &&
                            <td scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white space-x-1 text-right">
                                
                                {actions.map((action) => {
                                    let contitionResults = [];
                                    if(action.conditions && action.conditions.length > 0){
                                        action.conditions.forEach((condition) => {
                                            if(condition.operator === 'EQUALS'){
                                                if(row[condition.key] !== condition.value){
                                                    contitionResults.push(condition);
                                                }
                                            }else if(condition.operator === 'NOT_EQUALS'){
                                                if(row[condition.key] === condition.value){
                                                    contitionResults.push(condition);
                                                }
                                            }
                                            
                                        })
                                    }
                                    if(contitionResults.length <= 0){
                                        return <ActionItem data={row} action={action} />
                                    }
                                })}
                            </td>
                        }
                    </tr>)
                })}
                {data.length <= 0 && <tr>
                    <td className="text-2xl p-12 text-center bg-white" colSpan={columns.length}>Empty response</td>
                </tr>}
            </tbody>
            <tfoot className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <td colSpan={columns.length + (actions.length > 0 ? 1 : 0)} className="px-6 py-3 text-right">
                        Showing {data.length} of {total}
                    </td>
                </tr>
            </tfoot>
        </table>
    )
}

function DynamicTD({col, row}){
    
    if(col.type === "info_with_ui_avatars"){
        return <td  scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <InfoWithUIAvatars name={generateValue(col.value, row)} email={col.config?.mapping?.email ? generateValue(col.config?.mapping?.email, row): false} designation={col.config?.mapping?.designation ? generateValue(col.config?.mapping?.designation, row) : false} />
        </td>
    }else if(col.type === "info"){
        return <td  scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <Info title={generateValue(col.value, row)} subtitle={col.config?.mapping?.subtitle ? generateValue(col.config?.mapping?.subtitle, row): false} />
        </td>
    }else if(col.type === "status"){
        console.log("here", col.config?.mapping[generateValue(col.value, row) === true ? 1 : (generateValue(col.value, row) === false ? 0 : generateValue(col.value, row))]?.color)
        return <td  scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <span className={classNames("px-2 inline-flex text-xs leading-5 font-semibold rounded-full",{
                'bg-green-100 text-green-800': col.config?.mapping[generateValue(col.value, row) === true ? 1 : (generateValue(col.value, row) === false ? 0 : generateValue(col.value, row))]?.color === 'green',
                'bg-red-100 text-red-800': col.config?.mapping[generateValue(col.value, row) === true ? 1 : (generateValue(col.value, row) === false ? 0 : generateValue(col.value, row))]?.color === 'red',
                'bg-blue-100 text-blue-800': col.config?.mapping[generateValue(col.value, row) === true ? 1 : (generateValue(col.value, row) === false ? 0 : generateValue(col.value, row))]?.color === 'blue',
                'bg-indigo-100 text-indigo-800': col.config?.mapping[generateValue(col.value, row) === true ? 1 : (generateValue(col.value, row) === false ? 0 : generateValue(col.value, row))]?.color === 'indigo',
            })}>
                {col.config?.mapping[generateValue(col.value, row) === true ? 1 : (generateValue(col.value, row) === false ? 0 : generateValue(col.value, row))]?.icon && <Icon icon={col.config?.mapping[generateValue(col.value, row) === true ? 1 : (generateValue(col.value, row) === false ? 0 : generateValue(col.value, row))]?.icon} className="h-3 w-3 mt-1 mr-1" />}
                {col.config?.mapping[generateValue(col.value, row) === true ? 1 : (generateValue(col.value, row) === false ? 0 : generateValue(col.value, row))]?.message} 
            </span>
        </td>
    }else{
        console.log('generateValue',generateValue(col.value, row))
        return <td  scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {generateValue(col.value, row)}
        </td>
    }

}

function InfoWithUIAvatars({name, email = false, designation = false}){

    return <div className="flex items-center gap-4">
            <div className="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="font-medium text-gray-600 dark:text-gray-300">{name.split(' ').map((namePart) => namePart.charAt(0).toUpperCase()).slice(0, 2).join('')}</span>
            </div>
            <div className="font-medium dark:text-white">
                <div className="text-base text-black dark:text-gray-200">{name} {
                    designation && <sup className="text-xs text-gray-500 dark:text-gray-400">({designation})</sup>
                }</div>
                {email && <div className="text-sm text-gray-700 dark:text-gray-200">{email}</div>}
            </div>
        </div>
}

function Info({title, subtitle = false}){

    return <div className="flex items-center gap-4">
            <div className="font-medium dark:text-white">
                <div className="text-base text-black dark:text-gray-200">{title} </div>
                {subtitle && <div className="text-sm text-gray-700 dark:text-gray-200">{subtitle}</div>}
            </div>
        </div>
}

function generateValue(value, row){

    let splitededCol = value.split('.');
    
    if(splitededCol.length === 1){
        return row[splitededCol[0]]
    }else if(splitededCol.length === 2){
        return row[splitededCol[0]] ? row[splitededCol[0]][splitededCol[1]] : ''
    }else if(splitededCol.length === 3){
        return row[splitededCol[0]] && row[splitededCol[0]][splitededCol[1]] ? row[splitededCol[0]][splitededCol[1]][splitededCol[2]] : ''
    }else if(splitededCol.length === 4){
        return row[splitededCol[0]] && row[splitededCol[0]][splitededCol[1]] && row[splitededCol[0]][splitededCol[1]][splitededCol[2]] ? row[splitededCol[0]][splitededCol[1]][splitededCol[2]][splitededCol[3]] : ''
    }
}
