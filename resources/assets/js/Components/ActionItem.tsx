import { Link } from '@inertiajs/react';
import ActionButton from './Form/ActionButton';
import classNames from 'classnames';
import { useContext } from 'react';
import ModalContext from '../Store/modalContext';

type ActionItemProps = {
    data: any|null;
    action: any;
    icon?: string|null;
}

export default function ActionItem({ data = [], action, icon }: ActionItemProps) {

    const { newModel } = useContext(ModalContext);
    
    if (action.type === "link") {
        let linkparams = {};
        if (action.attachments) {
            action.attachments.forEach((val) => {
                
                linkparams[val.value] = data[val.key];
            });
        }
        let linkToProceed = Object.keys(linkparams).length > 0 ?  (action.action + "?" + new URLSearchParams(linkparams).toString()) : action.action;
        
        return (
            <Link href={linkToProceed}>
                <ActionButton
                    type={action.button}
                    label={action.label}
                    colorType={action?.color ? action.color : "primary"}
                    className={classNames("mr-2")}
                    icon={icon}
                />
            </Link>
        );
    } else if (action.type === "model") {
        let linkparams = {};
        if (action.attachments) {
            action.attachments.forEach((val) => {
                
                linkparams[val.value] = data[val.key];
            });
        }
        let linkToProceed = Object.keys(linkparams).length > 0 ?  (action.action + "?" + new URLSearchParams(linkparams).toString()) : action.action;
        
        
        return (
            <ActionButton
                type={action.button}
                onClick={() => newModel(linkToProceed)}
                colorType={action?.color ? action.color : "primary"}
                label={action.label}
                className={classNames("mr-2")}
                icon={icon}
            />
        );
    } else {
        return <></>;
    }
    //
}


