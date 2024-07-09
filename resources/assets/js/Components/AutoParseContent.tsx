import { Link } from "@inertiajs/react";
import { RenderRow, RenderWidget } from "./InteractionBuilder";

export default function AutoParseContent({ content , className = '', data = null}) {
    
    if(typeof content == "string"){
        return (
            <p className={className}>{content}</p>
        );
    }else{
        if(Array.isArray(content)){
            return <>
                {content.map(element => {
                    if(element.type == "anchor"){
                        return <Link className="ml-2" href={`http://`+element.value}>{element?.label ? element.label : element.value}</Link>
                    }else if(element.type == "text"){
                        return <>
                            <p className="">{element.text}</p>&nbsp;
                        </>;
                    }else if(element.type == "row"){
                        return <div className="">
                            <RenderRow row={element.elements} />
                        </div>
                    }else{
                        return <>Not Implimented</>
                    }
                })}
            </>
        }else if(typeof content == "object"){
                return <RenderWidget element={content} attachment_values={data} />
        }else{
            return <></>
        }
    }
}
