import { useState } from "react";
import {FormBody} from "./FormBuilder";
import { useEffect } from "react";

export default function FormViewer({ data, onChange }) {
    
    const [convertedData, setConvertedData] = useState(data)
    
    useEffect(() => {
        setConvertedData(data)
    }, [data])
    useEffect(() => {
        onChange(convertedData)
    }, [convertedData]);
    
    return (
        <div className="bg-white border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-sm shadow-sm py-1.5 block w-full px-2">
            <FormBody form={convertedData} data={data} errors={[]} addRelationData={(d) => console.log(d)} setData={(d) => console.log(d)} setRelationData={(d) => console.log(d)} />
        </div>
    );
}
