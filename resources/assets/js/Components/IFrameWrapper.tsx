import { useEffect, useRef } from 'react'
import { postHeight } from '@/Utils/iframewapper_helper';

export default function IFrameWrapper({ className = '', children }) {

    const ref = useRef(null)

    const calculateAndPostHeight = () => {
            if(window != undefined){
                const { innerHeight: height } = window;
                
                postHeight(ref.current ? ref.current.clientHeight : height)
            }
        }
    useEffect(() => {
        setTimeout(() => {
            calculateAndPostHeight()
        }, 200)
    },[])

    useEffect(() => {
        window.addEventListener("resize", () => {
            calculateAndPostHeight()
        });
        return () => {
            window.removeEventListener("resize", () => {
                calculateAndPostHeight()
            })
        }
    }, []);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    )
}
