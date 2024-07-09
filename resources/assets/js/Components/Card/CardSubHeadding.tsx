import AutoParseContent from "../AutoParseContent";
export default function CardSubHeadding({ sub_heading}) {
    
    if(typeof sub_heading == "string"){
        return (
            <p>{sub_heading}</p>
        );
    }else{
        return <AutoParseContent content={sub_heading} />
    }
}
