import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
       window.gapi.load('client:auth2', () => {
        window.gapi.client.init({
            clientId: '26481134499-t930p841d8s9gcm18ctt1q4ljqv42nkm.apps.googleusercontent.com',
            scope: 'email'
        });
       }); // callback fxn only executes after additional JS code downloaded from Google server
    }

    render() {
        return <div>Google Auth</div>
    }
}

export default GoogleAuth;