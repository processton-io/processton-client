import { Org } from "@/types"
import { Link } from "@inertiajs/react"
import classNames from "classnames"

type OrgLogoProps = {
    org: Org|null
    theme?: {
        type: string
        nav_bar: string
        breadcrumb: boolean
    }
}

export default function OrgLogo({ org, theme} : OrgLogoProps ) {
    return (<>
        {org && <div className="flex items-center">
            <div className="w-full">
                {org?.name && <Link href="/" className='cursor-pointer shrink-0 flex items-center'>
                    {org.full_logo_path && <img className={classNames("h-6 my-1 w-auto fill-current",{
                        'flex-1': theme.nav_bar == 'minified_side',
                        'flex-0': theme.nav_bar != 'minified_side'
                    })} src={org.full_logo_path} />}
                    {theme.nav_bar != 'minified_side' && <h3 className='ml-3 text-xl flex-1'>{org.name}</h3>}
                </Link>}
            </div>
        </div>}
    </>)
}