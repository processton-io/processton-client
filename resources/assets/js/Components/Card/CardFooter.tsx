import ActionItem from "../ActionItem";

export default function CardFooter({ footer, data }) {
    

    const {actions } = footer;
    if(
        (actions && actions.length > 0)
    ){
        return (<div className='flex-1 flex flex-row-reverse bg-clip-border mt-3 pt-3 border-t'>
            {actions && <div className="flex-0 space-x-2">
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
        </div>);
    }else{
        return <></>
    }
}
