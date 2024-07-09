import ActionItem from "../ActionItem";
import CardHeading from "./CardHeading";
import CardSubHeadding from "./CardSubHeadding";
import AppIcon from "../Elements/AppIcon";
import {WidgetCardHeaderData} from '../../types';
import AutoParseContent from "../AutoParseContent";

type CardHeaderProps = {
    header: WidgetCardHeaderData,
    data: any
}

export default function CardHeader({ header, data } : CardHeaderProps) {
    

    const {title, subtitle, actions, image = false, icon= false, content } = header;
    if(
        (title && title != "") || 
        (subtitle && subtitle != "") || 
        (actions && actions.length > 0)
    ){
        return (<div className="w-full flex flex-col">
            <div className='flex-1 flex flex-row bg-clip-border my-2 mt-4'>
                {image && <img src={image} className="w-12 h-12 inline-flex rounded-full ml-2" />}
                {icon && <AppIcon icon={icon} className="w-12 h-12 inline-flex rounded-full ml-2" />}
                <div className="px-4 text-gray-900 flex-1">
                    
                    <CardHeading heading={title} />
                    <CardSubHeadding sub_heading={subtitle} />
                </div>
                {actions && actions.length > 0 && <div className="flex-0 space-x-2">
                    {actions.map((action) => {
                        let contitionResults = [];
                        if(action.conditions && action.conditions.length > 0){
                            action.conditions.forEach((condition) => {
                                if(condition.operator === 'EQUALS'){
                                    if(data[condition.key] !== condition.value){
                                        contitionResults.push(condition);
                                    }
                                }else if(condition.operator === 'NOT_EQUALS'){
                                    if(data[condition.key] === condition.value){
                                        contitionResults.push(condition);
                                    }
                                }
                                
                            })
                        }
                        if(contitionResults.length <= 0){
                            return <ActionItem data={data} action={action}  />
                        }
                    })}
                </div>}
                
            </div>
            {content && <div className='flex-1 flex flex-row bg-clip-border mb-4 pt-2'>
                <AutoParseContent content={content} data={data} />
            </div>}
        </div>);
    }else{
        return <></>
    }
}
