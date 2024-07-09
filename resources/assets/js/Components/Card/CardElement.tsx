import AutoParseContent from "../AutoParseContent";
import TreeElement from "../TreeElement";
import IFrameWindow from "../IFrameWindow";

export default function CardElement({ element }) {
    
    return (
            <>
                {element.type === 'native' && <div className="w-full p-2 relative rounded-sm border mt-6 bg-white">
                    <span className="label absolute text-sm font-bold -top-5 left-0 px-2 border border-b-0 bg-white">{element.label}</span>
                        <AutoParseContent className="label pl-1" content={element.value} />
                    </div>}
                
                {element.type === 'tree' && <div className="w-full p-2 relative rounded-sm border mt-6 bg-white">
                    <span className="label absolute text-sm font-bold -top-5 px-2 border border-b-0 bg-white left-0">{element.label}</span>
                    <TreeElement className="pl-1 pt-2" tree={element.value} />
                    </div>}
                    
                {element.type === 'custom' && <div className="w-full p-2 relative rounded-sm border mt-6 bg-white">
                    <span className="label absolute text-sm font-bold -top-5 px-2 border border-b-0 bg-white left-0">{element.label}</span>
                        <IFrameWindow className="pl-1 pt-2 w-full" src={element.value} />
                    </div>}
            </>
    );
}
