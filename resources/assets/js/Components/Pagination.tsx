import { Link } from "@inertiajs/react"

export default function Pagination({data, application, actionlinks = [], showlinks = true}){
    
    return(
        <div className="flex flex-col gap-4 md:flex-row p-6 px-4">                  
            <div className="flex-1 align-right text-right space-x-1">
                {showlinks && 
                    data.links.map((link, index) => {
                        if(index >= (data.links.length -1) && data.current_page == data.last_page){
                            return <></>
                        }else if(index == 0 && data.current_page==1){
                            return <></>
                        }else{
                            return <Link className={
                            link.active ? "inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150  " : "inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 "} href={link.url+`&`+`app_slug=`+application.slug} dangerouslySetInnerHTML={{__html:link.label}} ></Link>
                        }
                        
                    })
                }
                {actionlinks.map((item) => {
                    return <Link href={route(item.link, item.link_params ? item.link_params: {})} className="inline-flex items-center px-2 py-1 bg-purple-800 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-purple-800 uppercase tracking-widest hover:bg-purple-700 dark:hover:bg-white focus:bg-purple-700 dark:focus:bg-white active:bg-purple-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-purple-800 transition ease-in-out duration-150" >{item.title}</Link>
                })}
            </div>
        </div>
    )

}