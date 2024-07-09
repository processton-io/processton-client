import classNames from 'classnames'
import { useState, useEffect, Fragment, useRef } from 'react'
import Icon from './Elements/AppIcon'
import { Dialog, Transition } from '@headlessui/react'
import { router } from '@inertiajs/react'

export default function IFrameWindow({ src, className = '' }) {

    const containerRef = useRef(null);

    const [height, setHeight] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    
    let [iFrameSrc, setIFrameSrc] = useState(false)
    let [isOpen, setIsOpen] = useState(false)

    const [renderedIframe, setRenderedIframe] = useState(src);
    const [modelSize, setModelSize] = useState('md');

    function closeModal() {
        setIsOpen(false)
    }

    // function openModal() {
    //     setIsOpen(true)
    // }

    function iframeLoaded(e){
        
        setRenderedIframe(e.target.src)
        setIsLoading(false)
    }

    // This hook is listening an event that came from the Iframe
    useEffect(() => {
        const handler = (ev) => {
            
            if (typeof ev.data !== 'object') return
            if (!ev.data.type) return
            if (ev.data.type === 'react-devtools-content-script') return
            if (ev.data.type == 'height'){
                if (ev.data.element_slug != renderedIframe) return
                if (!ev.data.message) return
                setHeight(ev.data.message);
            }
            if (ev.data.type == 'redirect'){
                console.log(ev.data);
                setIsOpen(false)
                if (ev.data.message){
                    router.visit(ev.data.message)    
                }else{
                    window.location.reload()
                }
                
            }
            if (ev.data.type == 'popup-model'){
                
                if (!ev.data.message) return
                setIFrameSrc(ev.data.message)
                setIsOpen(true)
                if(ev.data.size) setModelSize(ev.data.size)
            }
            
        }

        if(window != undefined){
            window.addEventListener('message', handler)

            // Don't forget to remove addEventListener
            return () => window.removeEventListener('message', handler)
        }
    }, [])

    return (
        <div ref={containerRef}>
            <Transition appear show={isLoading}>
                <div className='w-full text-center '>
                    <div className='bg-white mx-auto py-2.5 px-2'>
                        <Icon className='animate-spin inline-block mr-1 h-6 w-6' icon={`loader`} /> Loading... 
                    </div>
                </div>
            </Transition>
            <iframe onLoad={(e) => iframeLoaded(e)} className={classNames(`w-full`, className, {"hidden": isLoading})} src={src} style={{height: isLoading ? '0px' : (height != '' ? height+`px` : '1000px')}} frameBorder="0" scrolling="no" />
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-0 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className={classNames("w-full transform overflow-hidden rounded-sm bg-white p-0 text-left align-middle shadow-xl transition-all max-h-lg",{
                                    'max-w-xs' : modelSize === 'xs',
                                    'max-w-sm' : modelSize === 'sm',
                                    'max-w-md' : modelSize === 'md',
                                    'max-w-lg' : modelSize === 'lg',
                                    'max-w-xl' : modelSize === 'xl',
                                    'max-w-2xl' : modelSize === '2xl',
                                    'max-w-3xl' : modelSize === '3xl',
                                    'max-w-4xl' : modelSize === '4xl',
                                    'max-w-5xl' : modelSize === '5xl',
                                    'max-w-6xl' : modelSize === '6xl',
                                    'max-w-7xl' : modelSize === '7xl'
                                })}>
                                
                                <div className="h-full overflow-y-auto">
                                    <IFrameWindow src={iFrameSrc} />
                                </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
        
    )

}
