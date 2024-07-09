import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";

import {WidgetCardData} from "../../types"


type CardProps = {
    data: WidgetCardData;
    attachments?: any;
}

export default function Card({ data , attachments}: CardProps) {
    
    const {header = {}, body = {}, footer = {}} = data;
    
    return (
            <div className="w-full p-4 m-0 bg-white border h-full flex flex-col divide-y-2">
                {Object.keys(header).length > 0 && <CardHeader header={header} data={attachments} />}
                {Object.keys(body).length > 0 && <CardBody body={body} data={attachments}  />}
                {Object.keys(footer).length > 0 && <CardFooter footer={footer} data={attachments}  />}
            </div>
    );
}
