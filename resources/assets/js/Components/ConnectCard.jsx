import PrimaryButton from '@/Components/PrimaryButton';
import { Link } from '@inertiajs/react';
import FeatherIcon from 'feather-icons-react';
import SecondaryButton from './SecondaryButton';
import classNames from 'classnames';

export default function FacebookCard({label, icon, isConnected, onClick, className = '', ...props }) {
    return (
        <div 
            {...props}
            className={
                ' w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4 ' + className
            }>
            <div className="relative flex flex-col min-w-0 break-words bg-white shadow-2xl rounded-md bg-clip-border">
                <div className="flex-auto p-4">
                    <div className="flex flex-row">
                        <div className="flex-none w-4/5 max-w-full px-3">
                            <div>
                                <h5 className="mb-2 font-bold">
                                    <p>{label}</p>
                                </h5>
                                {isConnected && <SecondaryButton onClick={(e) => onClick({
                                    event: 'disconnect',
                                    icon: icon
                                })}>Disconnect</SecondaryButton>}
                                {!isConnected && <PrimaryButton onClick={(e) => onClick({
                                    event: 'connect',
                                    icon: icon
                                })}>Connect</PrimaryButton>}
                            </div>
                        </div>
                        <div className="pt-3 pr-6 text-right basis-1/5">
                            <div className={classNames("inline-block text-left w-12 h-12 p-2 text-center rounded-lg bg-gradient-to-tl text-white",{
                                "from-indigo-700 to-blue-500": icon ==="facebook",
                                "from-red-700 to-red-500": icon ==="google",
                                "from-blue-700 to-blue-500": icon ==="linkedin",
                                "from-blue-800 to-blue-400": icon ==="twitter"
                            })}>
                                <FeatherIcon icon={icon} className="w-8 h-8 " />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
