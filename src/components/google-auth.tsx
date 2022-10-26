import { useEffect, useRef, useState } from 'react';

const GoogleAuth = () => {
    const [isSignedIn, setIsSignedIn] = useState(null);
    const auth = useRef<any>();
    useEffect(() => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client
                .init({
                    plugin_name: 'Streamy',
                    clientId:
                        '668831500786-q9mfqia06secrc91fk3lg3nhq1e4trb9.apps.googleusercontent.com',
                    scope: 'email',
                })
                .then(() => {
                    // @ts-ignore
                    auth.current = window.gapi.auth2.getAuthInstance();
                    setIsSignedIn(auth.current.isSignedIn.get());
                    auth.current.isSignedIn.listen(onAuthChange);
                });
        });
    }, []);

    const onAuthChange = () => {
        setIsSignedIn(auth.current.isSignedIn.get());
    };

    const onSignInCLick = () => {
        auth.current.signIn();
    };

    const onSignOutClick = () => {
        auth.current.signOut();
    };

    const renderAuthButton = () => {
        if (isSignedIn === null) {
            return null;
        } else if (isSignedIn) {
            return (
                <button
                    onClick={onSignOutClick}
                    className="ui red google button"
                >
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button
                    onClick={onSignInCLick}
                    className="ui red google button"
                >
                    <i className="google icon" />
                    Sign In with Google
                </button>
            );
        }
    };

    return <div>{renderAuthButton()}</div>;
};

export default GoogleAuth;
