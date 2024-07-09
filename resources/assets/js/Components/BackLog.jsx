
export default function BackLog({records}){
    return (
        <div className="space-y-2">
        {
            Object.keys(records).map((index) => {
                const record = records[index];
                return (<div className="bg-gray-200 rounded shadow-sm p-2">
                    <h3 className="text-sm text-black mb-2 font-medium text-md">{record.title}</h3>
                    <>
                    {
                        record.items.length > 0 ? record.items.map((task, index) => {
                            return (<div className="p-2 rounded shadow-sm border-gray-100 border-2 bg-white grid grid-cols-4">
                                <h3 className="text-sm text-gray-700">{task.title}</h3>
                                <p className="bg-red-100 text-xs w-max p-1 rounded mr-2 text-gray-700">{task.status}</p>
                                <div className="flex flex-row items-center">
                                    <div className="bg-gray-300 rounded-full w-4 h-4 mr-3"></div>
                                    <a href="#" className="text-xs text-gray-500">Sophie Worso</a>
                                </div>
                                <p className="text-xs text-gray-500">2</p>
                            </div>)
                        }) : <div className="p-2 rounded shadow-sm border-gray-100 border-2 bg-white grid grid-cols-4">
                                <h3 className="text-sm text-gray-700">No tasks</h3>
                            </div>
                    }
                    </>
                </div>)
            })
        }
        </div>
        
    )
}