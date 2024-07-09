import React from 'react';
import { User, Org, Application } from '../types';
import BaseLayout from './BaseLayout';
import { ModalContextProvider } from '../Store/modalContext';

type AppLayoutProps = {
    org: Org|null,
    user: User|null,
    title?: string,
    application: Application|null,
    applications: Application[]|null,
    header?: any,
    children?: any,
    navbarStyle?: string,
};

export default function AppLayout({ user, org, title = '', application, applications = [], header = '', children, navbarStyle } : AppLayoutProps) {
    
    return (
        <React.Fragment>
            <ModalContextProvider>
                <BaseLayout 
                    org={org} 
                    user={user}
                    applications={applications}
                    application={application} 
                    header={header} 
                    title={title ? title : application?.name}
                    navbarStyle={navbarStyle}
                >{children}</BaseLayout>
            </ModalContextProvider>
        </React.Fragment>
    )
}
