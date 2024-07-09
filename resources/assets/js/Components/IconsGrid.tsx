import Icon from "./Elements/AppIcon";

export default function IconsGrid({ icons }) {
    
    return (
            <div className="bg-white rounded-sm py-4">
                <div className='flex-1 bg-clip-border'>
                    <div className="px-4 pb-4 text-gray-900">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">Proposals</h2>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 mx-4">
                    {icons.map((icon) => {
                        return <div className="bg-gradient-to-r from-indigo-500 from-10% via-indigo-600 via-30% to-indigo-500 to-90% rounded-md shadow">
                            <div className="text-center text-white p-4">
                                <Icon icon={icon.type} className="w-12 h-12 inline-block text-white" />
                                <p className="py-1 text-md font-medium">{icon.title}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
    );
}
