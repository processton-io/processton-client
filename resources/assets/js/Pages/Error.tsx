import { Head } from '@inertiajs/react';
import AppLayout from '../Layouts/AppLayout';
import ErrorComponent from '../Components/Error';

export default function Error({ auth, application, org, code = '', error_msg = '',applications, error_description = ''  }) {
    
    return (
        <AppLayout
            user={auth.user}
            application={application}
            applications={applications}
            org={org}
        >
            <>
                <Head title="Apps" />
                <ErrorComponent code={code} error_msg={error_msg} error_description={error_description} />
            </>
        </AppLayout>
    );
}
