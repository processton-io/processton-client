import AutoParseContent from "../AutoParseContent";
import { WidgetCardBodyData } from '../../types'

type CardBodyProps = {
    body: WidgetCardBodyData,
    data: any;
}

export default function CardBody({ body, data } : CardBodyProps) {

    const { content } = body

    return(<div  className="w-full py-4">
        <AutoParseContent content={content} data={data}></AutoParseContent>
    </div>)
}
