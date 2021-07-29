import React from 'react';

class GoogleAuth extends React.Component {
    state = { isSignedIn: null };

    componentDidMount() {
       window.gapi.load('client:auth2', () => {
        window.gapi.client.init({
            clientId: '26481134499-t930p841d8s9gcm18ctt1q4ljqv42nkm.apps.googleusercontent.com',
            scope: 'email'
        }).then(() => {
            this.auth = window.gapi.auth2.getAuthInstance(); // define the Auth object when ready
            this.setState({ isSignedIn: this.auth.isSignedIn.get() });
            this.auth.isSignedIn.listen(this.onAuthChange);
        });
       }); // callback fxn only executes after additional JS code downloaded from Google server
    }

    onAuthChange = () => { // context is bound to the component, due to arrow function definition
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    }

    onSignIn = () => {
        this.auth.signIn();
    }

    onSignOut = () => {
        this.auth.signOut();
    }

    renderAuthButton() { // only put () on methods if you want to execute them AS SOON AS they're rendered
        if (this.state.isSignedIn === null) {
            return <div>Dunno if anyone's signed in!</div>;
        } else if (this.state.isSignedIn) {
            return (
                <button className="ui red google button" onClick={this.onSignOut} >
                    <i className="google icon" />
                    Sign out
                </button>
            );
        } else {
            return (
                <button className="ui red google button" onClick={this.onSignIn} >
                    <i className="google icon" />
                    Sign in with Google
                </button>
            );
        }
    }

    render() {
        return <div>{ this.renderAuthButton() }</div> // need the () on the function here
    }
}

export default GoogleAuth;