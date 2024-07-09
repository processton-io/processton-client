import { useEffect, useRef, useState } from 'react';
import { Head, Link } from '@inertiajs/react';

import { parseMenu } from '../Utils/layput_helper';

import { Org, Application } from '../types';

import classNames from 'classnames';
import { route } from 'ziggy-js';

import OrgLogo from '../Components/UI/OrgLogo';
import UserDropdown from '../Components/UI/UserDropdown';

import ApplicationLogo from '../Components/ApplicationLogo';
import NavLink ,{ NavLinkSimple, NavLinkSide } from '../Components/NavLink';
import ResponsiveNavLink from '../Components/ResponsiveNavLink';
import FeatherIcon from 'feather-icons-react';
import Icon from '../Components/Elements/AppIcon';

import Modal from '../Components/Modal';
import ActionButton from '../Components/Form/ActionButton';

export const useContainerDimensions = (myRef) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const getDimensions = () => ({
      width: myRef.current.offsetWidth,
      height: myRef.current.offsetHeight
    })

    const handleResize = () => {
      setDimensions(getDimensions())
    }

    function debounce(func){
        var timer;
        return function(event){
            if(timer) clearTimeout(timer);
            timer = setTimeout(func,100,event);
        };
    }

    if (myRef.current) {
      setDimensions(getDimensions())
    }

    window.addEventListener("resize", debounce(function (){
        handleResize()
    }))

    return () => {
      window.removeEventListener("resize", debounce(function (){
            handleResize()
        }))
    }
  }, [myRef])

  return dimensions;
};

type BaseLayoutProps = {
    org: Org,
    user: any,
    applications: Application[],
    application: Application,
    title: string,
    header: any,
    children: any,
    navbarStyle?: string
}


export default function BaseLayout({
    org,
    user,
    applications,
    application,
    title,
    header,
    children
} : BaseLayoutProps ) {
    
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [showingAppsDropdown, setShowingAppsDropdown] = useState(false);
    const [showingProfileDropdown, setShowingProfileDropdown] = useState(false);
    const [activeMenuGroup, setActiveMenuGroup] = useState({
        label: 'Dashboard',
        slug: "",
        children: []
    });
    const componentRef = useRef()
    const secondComponentRef = useRef()
    const { width:width1 } = useContainerDimensions(componentRef)
    const { width:width2 } = useContainerDimensions(secondComponentRef)
    const currentURL = window ? window.location.href.split('?')[0] : '';

    const menueItems : any[] = parseMenu(application)

    const { theme } = application;
    console.log(theme)
    useEffect(() => {

        if(width1 <= (width2 + 10)){
            setShowingNavigationDropdown(false)
        }


    },[width1, width2]);

    useEffect(() => {

        setActiveMenuGroup(menueItems.find((link) => {
            if(link.active_links && link.active_links.length > 0){
                if(link.active_links.includes(currentURL)){
                    return link.active_links.includes(currentURL)
                }
                
            }
            if(link.hidden_links && link.hidden_links.length > 0){
                
                if(link.hidden_links.includes(currentURL)){
                    return link.hidden_links.includes(currentURL)
                }
                
            }
            return currentURL.startsWith(link.href) || currentURL == link.href;
            
        }));
        
    },[currentURL]);

    return (
        <div className={ classNames("min-h-screen bg-gradient-to-b from-gray-200 from-10% via-gray-100 via-30% to-gray-50 to-90%")}>
            <Head title={title} />
            {(
                theme.nav_bar == "minified_top" || theme.nav_bar == "top" || theme.nav_bar == "admin_top"
                ) &&  <nav className={ classNames("border-b-2 border-gray-100 shadow shadow-inner bg-white text-gray-800") }>
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-12">
                        <OrgLogo org={org}  theme={theme}/>

                        <div className="flex-1 flex md:flex">
                            {theme.nav_bar == "minified_top" && <div className={classNames('w-full md:flex h-12')}>
                                <div className="sm:-my-px w-full flex flex-row md:ml-0 px-4 sm:px-6 lg:px-8 ">
                                    <div className='flex-1 w-full flex'>
                                        <div className="hidden md:flex items-center border-t h-12">
                                                
                                                {(menueItems) && menueItems?.map((link) => {
                                                    if(link.is_hidden){
                                                        return <></>
                                                    }
                                                    let urllink = link?.slug;
                                                    
                                                    return <NavLinkSimple href={link?.href} active={activeMenuGroup?.slug && activeMenuGroup.slug === urllink} className='shadow-inner shadow-inner-xl h-12'>
                                                        {link.icon && <Icon icon={link.icon} className="mr-2 h-4" /> }
                                                        {link.label}
                                                    </NavLinkSimple>
                                                })}
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>}
                        </div>

                        <UserDropdown user={user} />

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingProfileDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg className="h-4 w-4" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <Icon icon={'user'}
                                        className={!showingProfileDropdown ? 'inline-flex' : 'hidden'}
                                    />
                                    <Icon icon={'x-circle'}
                                        className={showingProfileDropdown ? 'inline-flex' : 'hidden'}
                                    />
                                </svg>
                            </button>
                        </div>
                        {theme.nav_bar == "minified_top" && <div className="-mr-2 flex-0 flex items-center place-items-center md:hidden h-12">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg className="h-4 w-4" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <Icon icon={'menu'}
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                    />
                                    <Icon icon={'x-circle'}
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                    />
                                </svg>
                            </button>
                        </div>}
                    </div>
                </div>

                
            </nav> }
            <nav className="bg-white border-b border-gray-100" ref={componentRef}>
                { (theme.nav_bar == "admin_top" || theme.nav_bar == "top") && <>
                <div className="w-full flex md:flex">
                    <div className={classNames('w-full md:flex',{
                                                'h-8' : theme.nav_bar == "admin_top",
                                                'h-12' : theme.nav_bar == "top",
                                            })}>
                        <div className="sm:-my-px w-full flex flex-row md:ml-0 px-4 sm:px-6 lg:px-8 ">
                            {theme.nav_bar == "admin_top" && <div className={classNames('flex-0 min-w-48  border-b border-gray-100',{
                                // 'min-w-48' : activeMenuGroup?.children && activeMenuGroup.children.length > 0,
                                // 'min-w-48' : !activeMenuGroup?.children ||  activeMenuGroup.children.length <= 0,
                                })}>
                                <div className="border-t border-gray-200 bg-white">
                                    <div className="border-l border-r border-gray-200 shadow-inner" >
                                        <span className='inline-flex cursor-pointer items-center px-4 border-b-2 border-t text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none min-w-xxxs max-w-xxs text-center border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 w-full md:w-full flex-1 h-8' onClick={() => setShowingAppsDropdown(!showingAppsDropdown)}>
                                            <ApplicationLogo className="block h-4 mr-2 w-auto fill-current" />
                                                {application?.name}
                                        </span>
                                    </div>
                                </div>
                            </div>}
                            <div className={ classNames({
                                'flex-1 w-full flex': theme.nav_bar == "admin_top",
                                'flex-1 w-full flex justify-center': theme.nav_bar == "top",
                            })}>
                                <div className={classNames({
                                    "hidden md:block inline-flex items-center border-t h-8" :theme.nav_bar == "admin_top",
                                    "hidden md:flex justify-center border-t h-12" :theme.nav_bar == "top"
                                })}>
                                        
                                        {(menueItems) && menueItems?.map((link) => {
                                            if(link.is_hidden){
                                                return <></>
                                            }
                                            let urllink = link?.slug;
                                            
                                            return <NavLink href={link?.href} active={activeMenuGroup?.slug && activeMenuGroup.slug === urllink} className={classNames('shadow-inner shadow-inner-xl',{
                                                'h-8' : theme.nav_bar == "admin_top",
                                                'h-12' : theme.nav_bar == "top",
                                            })}>
                                                {link.icon && <Icon icon={link.icon} className="mr-2 h-4" /> }
                                                {link.label}
                                            </NavLink>
                                        })}
                                </div>
                            </div>

                            <div className="-mr-2 flex-0 items-center place-items-center md:hidden">
                                <button
                                    onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                    className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                >
                                    <svg className="h-4 w-4" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <Icon icon={'menu'}
                                            className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        />
                                        <Icon icon={'x-circle'}
                                            className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {user && <div className={(showingProfileDropdown ? 'block' : 'hidden') + ' absolute sm:hidden w-screen  '}>
                    <div className="border-t border-gray-200 bg-white z-50">
                        <div className="mt-3 px-4">
                            <div className="font-medium text-base text-gray-800">{user.name}</div>
                            <div className="font-medium text-sm text-gray-500">{user.email}</div>
                        </div>

                        <div className="">
                            <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>}
                </>}
                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' absolute w-screen  '}>
                    {(application && application?.menu) && application.menu.map((link) => {
                        if(link.is_hidden){
                            return <></>
                        }
                        return <div className="border-t border-gray-200 z-100">
                            <div className="px-0 z-100">
                                <ResponsiveNavLink className='z-100' href={link.slug} active={link.active_links && link.active_links.length > 0 ? link.active_links.includes(currentURL) : currentURL === link.slug}>
                                    {link.icon && <Icon icon={link.icon} className="mr-2 h-4 mt-1" /> }
                                    {link.label}
                                </ResponsiveNavLink>
                            </div>
                            {(link.children && link.children.length > 0) && 
                                <div className="pl-3 bg-gray-300 border-t border-b border-gray-300 z-100">
                                    {link.children.map((childLink) => {
                                        if(childLink.is_hidden){
                                            return <></>
                                        }
                                        return <ResponsiveNavLink href={childLink.slug} className='bg-white z-100'>
                                            {childLink.icon && <Icon icon={childLink.icon} className="mr-2 h-4" /> }
                                            {childLink.label}
                                        </ResponsiveNavLink>
                                    })}
                                </div>
                            }
                        </div>
                    })}
                </div>
            </nav>

            <main>
                <div className={classNames('flex w-full',{
                    'flex-row' : theme.nav_bar == "minified_side" || theme.nav_bar == "side" || theme.nav_bar == "admin_side",
                    'flex-col' : theme.nav_bar == "minified_top" || theme.nav_bar == "top" || theme.nav_bar == "admin_top"
                })}>
                    {(
                    theme.nav_bar == "minified_side" || theme.nav_bar == "side" || theme.nav_bar == "admin_side"
                    ) &&  <aside className={classNames("h-screen transition-transform -translate-x-full sm:translate-x-0",{
                        "w-14" : theme.nav_bar == "minified_side",
                        "w-64" : theme.nav_bar == "side" || theme.nav_bar == "admin_side",
                    })} aria-label="Sidebar">
                        <div  className={classNames("h-full overflow-y-auto bg-gray-50 dark:bg-gray-800 space-y-2 divide-y",{
                            "px-1 py-2 pt-1" : theme.nav_bar == "minified_side",
                            "px-3 py-3 pt-1" : theme.nav_bar == "side" || theme.nav_bar == "admin_side",
                        })}>
                            <OrgLogo org={org} theme={theme} />
                            <div className={classNames('flex-1 border-b border-gray-100 mt-2')}>
                                <div className={classNames("cursor-pointer font-medium",{
                                    "w-full flex-1" : theme.nav_bar == "minified_side",
                                    "inline-flex w-full" : theme.nav_bar == "side" || theme.nav_bar == "admin_side",
                                })}>
                                    <span className={classNames('flex w-full text-gray-900 dark:text-white bg-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 group',{
                                        'p-2 items-start': theme.nav_bar == "side" || theme.nav_bar == "admin_side",
                                        'p-1 items-center': theme.nav_bar == "minified_side",
                                    })} onClick={() => setShowingAppsDropdown(!showingAppsDropdown)}>
                                        <ApplicationLogo className={classNames('text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white',{
                                            'w-5 h-5 flex-shrink-0': theme.nav_bar == "side" || theme.nav_bar == "admin_side",
                                            'w-8 h-8 flex-1': theme.nav_bar == "minified_side",
                                        })} />
                                        {(theme.nav_bar == "side" || theme.nav_bar == "admin_side") && 
                                            <span className='flex-1 text-left text-md ms-3 whitespace-nowrap'>{application?.name}</span>
                                        }
                                    </span>
                                </div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <ul className="flex-1 space-y-2 divide-y w-full">
                                    {(menueItems) && menueItems?.map((link) => {
                                        if(link.is_hidden){
                                            return <></>
                                        }
                                        let urllink = link?.slug;
                                        
                                        return <li className='pt-2'>
                                            <NavLinkSide href={link?.href} active={activeMenuGroup?.slug && activeMenuGroup.slug === urllink} className={classNames({
                                                'px-1': theme.nav_bar == "side" || theme.nav_bar == "admin_side",
                                                'p-1 flex w-full items-center': theme.nav_bar == "minified_side",
                                            })}>
                                                {link.icon && <Icon icon={link.icon} className={classNames("flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",{
                                                    'w-5 h-5 inline-flex': theme.nav_bar == "side" || theme.nav_bar == "admin_side",
                                                    'w-6 h-6 flex-1': theme.nav_bar == "minified_side",
                                                })} /> }
                                                {(theme.nav_bar == "side" || theme.nav_bar == "admin_side") && <span className='flex-1 ms-3 whitespace-nowrap text-sm'>{link.label}</span>}
                                            </NavLinkSide>
                                        </li>
                                    })}
                                    
                                </ul>
                            </div>
                        </div>
                    </aside>}
                    {activeMenuGroup && activeMenuGroup.children && activeMenuGroup.children.length > 0 &&
                        <div className='hidden md:block sm:pl-6 lg:pl-8 bg-white shadow-2xl bg-clip-border' >
                            <div className='w-48'>
                                <div className="py-0">
                                    <div className="">
                                        <div className="overflow-hidden overflow-y-auto break-words border-l border-gray-200 h-side-bar ">
                                            {activeMenuGroup.children.map((link) => {
                                                if(link.is_hidden){
                                                    return <></>
                                                }
                                                return <NavLink href={link.href} active={currentURL.startsWith(link.href) ? true : (
                                                    link.hidden_links.length > 0 ? link.hidden_links.includes(currentURL) : false
                                                )} className='w-full py-2'>
                                                    {link.icon && <Icon icon={link.icon} className="mr-2 h-4" /> }
                                                    {link.label}
                                                </NavLink>
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    <div>
                        {header}
                    </div>
                    <div className={classNames({ 
                        'hidden md:flex' : showingNavigationDropdown, 
                        'flex' : !showingNavigationDropdown,
                        'h-screen w-screen' : theme.centered_layout,
                        'w-full' : !theme.centered_layout
                        })}>
                        <div className={classNames({
                            'mx-auto my-auto' : theme.centered_layout, 
                            'flex-1' : !theme.centered_layout, 
                        })}>
                            {children}
                        </div>
                    </div>
                </div>
            </main>
            <Modal show={showingAppsDropdown} onClose={setShowingAppsDropdown}>
                <div className="p-6">
                    <div >
                        {applications && Object.keys(applications).map((group) => {
                            return <div className='max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto mb-6 px-6 md:px-2'>
                                <h3 className='text-lg font-bold mb-1'>{group}</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start border-t pt-6 gap-6">
                                    {applications[group].map((application) => {
                                        return <Link href={route('processton-client.app.index',{ app_slug: application.slug})} className='text-center flex-0 flex flex-col align-middle justify-center cursor-pointer w-20 mx-auto'>
                                            <div className="block text-center mb-2 w-20">
                                                <div className='p-2 shadow-md rounded-lg bg-gradient-to-tl from-indigo-700 to-blue-500 text-white inline-block'>
                                                    <FeatherIcon icon={application.icon} className={'inline'} />
                                                </div>
                                            </div>
                                            <span className='flex-block text-xs text-center w-20'>{application.name}</span>
                                        </Link>
                                    })}
                                </div>
                            </div>
                            
                        })}
                    </div>
                    <div className="mt-6 flex justify-end">
                        <ActionButton onClick={() => setShowingAppsDropdown(false)}>Cancel</ActionButton>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
