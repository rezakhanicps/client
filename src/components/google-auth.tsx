import { useEffect } from 'react';

const GoogleAuth = () => {
    useEffect(() => {
        // @ts-ignore
        window.gapi.load('client:auth2', () => {
            // @ts-ignore
            window.gapi.client.init({
                clientId:
                    '668831500786-q9mfqia06secrc91fk3lg3nhq1e4trb9.apps.googleusercontent.com',
                scope: 'email',
            });
        });
    }, []);

    return <div>Google Auth</div>;
};

export default GoogleAuth;
