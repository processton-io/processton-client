import classNames from "classnames";

export default function TreeElement({ tree, className='' }) {
    
    
    return (
            <div className={classNames('flex-1 bg-clip-border', className)}>
                {tree.map((element) => {
                    return <div className="px-4 text-gray-900 py-2 rounded-sm border">
                            <div className="flex flex-row">
                                <div className="flex-1 flex flex-col">
                                    <span>{element.label}</span>
                                    <span className="text-sm text-grey-500">{element.slug}</span>
                                    {element.children && <TreeElement className="mt-2" tree={element.children} />}
                                </div>
                            </div>
                        </div>
                })}
            </div>
    );
}
