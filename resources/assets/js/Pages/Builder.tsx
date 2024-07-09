import { BuilderProps } from '../types';
import AppLayout from '../Layouts/AppLayout';
import InteractionBuilder from '../Components/InteractionBuilder';

import BreadCrumb from '../Components/Elements/BreadCrumb';

export default function Builder({ 
    org, 
    auth, 
    applications, 
    application, 
    interaction, 
    attachment_values,
    navbarStyle = 'default'
} : BuilderProps) {
    return (
        <AppLayout
            user={auth.user}
            org={org}
            application={application}
            applications={applications}
            title={interaction.name}
            navbarStyle={navbarStyle}
            header={
                <>{application.theme.breadcrumb && <BreadCrumb items={interaction?.schema?.breadcrumbs ? interaction?.schema?.breadcrumbs : []} actions={interaction?.schema.header_actions ? interaction?.schema.header_actions : []} />}</>
            }
        >
            <div className="px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
                <InteractionBuilder {...interaction} attachment_values={attachment_values} />
            </div>
        </AppLayout>
    );
}
