import { Link } from '@inertiajs/react';
import Icon from './AppIcon';
import ActionItem from '../ActionItem';


export default function BreadCrumb({items, actions = []}) {
    
    return (<nav className="flex bg-white border-b" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse ml-8 py-2 pl-3">
            {
                items.map((item, index) => {
                    return <BreadCrumbItem key={index} index={index} item={item} length={items.length} />
                })
            }
        </ol>
        <ol className="flex-1 inline-flex  justify-end items-right space-x-1 md:space-x-2 rtl:space-x-reverse ml-8 py-2 pr-3">
            {
                actions.map((action, index) => {
                    return <ActionItem key={index} action={action} data={[]} />
                })
            }
        </ol>

    </nav>)
}

function BreadCrumbItem({index, item, length}) {
    return (
        <li className="inline-flex items-center">
            <Link href={item?.slug} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-600 dark:text-gray-400 dark:hover:text-white">
                {index === 0 && <Icon icon={item?.icon} className="h-4 mr-1" />}
                {item?.label}
            </Link>
            {index < (length - 1) && <Icon icon="chevron-right" className="h-4 ml-2" />}
        </li>
    )
}