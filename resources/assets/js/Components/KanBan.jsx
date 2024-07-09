import classNames from "classnames";

export default function KanBan({records}) {
    return (<div className="h-screen p-2">
        <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-5">
            {Object.keys(records).map((index) => {
                const record = records[index];
                console.log(record)
                return (<div className="bg-white rounded px-2 py-2">
            
                <div className="flex flex-row justify-between items-center mb-2 mx-1">
                    <div className="flex items-center">
                        <h2 className={classNames("text-sm w-max px-1 rounded mr-2 text-gray-700",{
                                "bg-yellow-100": index === "open",
                                "bg-indigo-100": index === "in-progress",
                                "bg-green-100": index === "completed",
                                "bg-blue-100": index === "on-hold",
                            })}>{index}</h2>
                        <p className="text-gray-400 text-sm">3</p>
                    </div>
                    <div className="flex items-center text-gray-300">
                        <p className="mr-2 text-2xl">---</p>
                        <p className="text-2xl">+</p>
                    </div>
                </div>
                <div className="flex flex-row items-center text-gray-300 mt-2 px-1">
                    <p className="rounded mr-2 text-2xl">+</p>
                    <p className="pt-1 rounded text-sm">New</p>
                </div>
                <div className="grid grid-rows-2 gap-2">
                    {record.items.map((item) => {
                        return (<div className="p-2 rounded shadow-sm border-gray-100 border-2">
                            <h3 className="text-sm mb-3 text-gray-700">{item.title}</h3>
                            <p className={classNames("text-xs w-max p-1 rounded mr-2 text-gray-700",{
                                "bg-yellow-100": item.status_type === "open",
                                "bg-indigo-100": item.status_type === "in-progress",
                                "bg-green-100": item.status_type === "completed",
                                "bg-blue-100": item.status_type === "on-hold",
                            })}>{item.status}</p>
                            <div className="flex flex-row items-center mt-2">
                                <div className="bg-gray-300 rounded-full w-4 h-4 mr-3"></div>
                                <a href="#" className="text-xs text-gray-500">Sophie Worso</a>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">2</p>
                        </div>)
                    })}
                </div>
            </div>)
            })}
        </div>
    </div>);
}