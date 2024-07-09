import AppIcon from "./Elements/AppIcon";
import classNames from "classnames";
import CountUp from 'react-countup';
import { Element, WidgetStatData } from "../types"


export default function StatsCard(props: Element) {

    const { title, data} = props;

    const { type, value, icon, unit, format = false, precision = 2, seperator , value_2, unit_2} = data as WidgetStatData;

    const formatNumber = (num) => {
        if (format) {
            const map = [
                { suffix: 'T', threshold: 1e12 },
                { suffix: 'B', threshold: 1e9 },
                { suffix: 'M', threshold: 1e6 },
                { suffix: 'K', threshold: 1e3 },
                { suffix: '', threshold: 1 },
            ];

            const found = map.find((x) => Math.abs(num) >= x.threshold);

            num = parseInt(num);
            
            if (found) {
                
                const formatted = { value: (num / found.threshold).toFixed(precision) , sufix: found.suffix};

                return formatted;
            }
        }

        return {value: num, sufix: ''};
    }

    switch (type) {
        case 'simple_dual':
            console.log(title, value, icon, unit, unit_2, value_2, seperator);
            return <SimpleDualStatsCard title={title} value={formatNumber(value)} icon={icon} unit={unit} unit_2={unit_2} value_2={formatNumber(value_2)} seperator={seperator} />
        default:
            return <SimpleStatsCard title={title} value={formatNumber(value)} icon={icon} unit={unit} />
    }
}




export function SimpleStatsCard({title, value, icon, unit}) {

    return (
        <div className="w-full p-0 m-0 bg-white border h-full flex flex-col">
            <div className="min-w-0 break-words my-auto">
                <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                        <div className="pr-4 flex-1 flex-grow flex flex-col">
                            <h5 className={classNames("text-primary uppercase font-bold",{
                                ' text-xs' : icon,
                                ' text-lg' : !icon
                            })}>{title}</h5>
                            <>{icon && <span className="font-semibold text-4xl text-blueGray-700 text-left">
                                <CountUp 
                                    end={value.value}
                                    suffix={value.sufix}
                                     /> {unit && <span className="text-2xl">{unit}</span>}</span>}</>
                        </div>
                        <>{icon && <div className="relative w-auto pl-4 flex-shrink">
                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-14 h-14  rounded-full bg-gray-700">
                                <AppIcon icon={icon} />
                            </div>
                        </div>}</>
                        <>{!icon && <div className="relative w-auto pl-4 flex-initial">
                            <div className="px-3 py-0 text-center inline-flex items-right justify-end">
                                <span className="font-semibold text-4xl text-blueGray-700">
                                    <CountUp 
                                        end={value.value}
                                        suffix={value.sufix}
                                        />  {unit}
                                </span>
                            </div>
                        </div>}</>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function SimpleDualStatsCard({title, value, value_2, seperator, icon, unit, unit_2}) {

    return (
        <div className="w-full p-0 m-0 bg-white border h-full flex flex-col">
            <div className="min-w-0 break-words my-auto">
                <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                        <div className="relative pr-4 w-full xs:w-7/12 flex-grow flex-1">
                            <h5 className={classNames("text-primary uppercase font-bold",{
                                ' text-xs' : icon,
                                ' text-lg' : !icon
                            })}>{title}</h5>
                            {icon && <div className="py-2 pt-5">
                                <sup className="font-semibold text-4xl text-blueGray-700 text-right">{value.value} {value.suffix} {unit && <span className="text-2xl">{unit}</span>}</sup>
                                {seperator && <span className="text-4xl font-light text-blueGray-400 px-1">{seperator}</span>}
                                {value_2 && <sub className="font-semibold text-4xl text-blueGray-700 text-right">
                                    {value_2.value} {value_2.suffix} {unit_2 && <span className="text-2xl">{unit_2}</span>}
                                </sub>}
                            </div>}
                        </div>
                        <>{icon && <div className="relative w-auto pl-4 flex-shrink">
                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12  rounded-full bg-gray-700">
                                <AppIcon icon={icon} />
                            </div>
                        </div>}</>
                        <>{!icon && <div className="w-auto pl-4 flex-initial">
                            <div className="px-0 py-3 pb-2 text-center inline-flex items-right justify-end">
                                <sup className="font-semibold text-4xl text-blueGray-700">
                                    {value.value} {value.suffix} {unit && <span className="text-2xl">{unit}</span>}
                                </sup>
                                {seperator && <span className="text-4xl font-light text-blueGray-400">{seperator}</span>}
                                {value_2 && <sub className="font-semibold text-4xl text-blueGray-700">
                                    {value_2.value} {value_2.suffix} {unit_2 && <span className="text-2xl">{unit_2}</span>}
                                </sub>}
                            </div>
                        </div>}</>
                    </div>
                </div>
            </div>
        </div>
    )
}