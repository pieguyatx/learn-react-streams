import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {

    componentDidMount() {
       window.gapi.load('client:auth2', () => {
        window.gapi.client.init({
            clientId: '26481134499-t930p841d8s9gcm18ctt1q4ljqv42nkm.apps.googleusercontent.com',
            scope: 'email'
        }).then(() => {
            this.auth = window.gapi.auth2.getAuthInstance(); // define the Auth object when ready
            this.onAuthChange(this.auth.isSignedIn.get()); // update auth state in Redux store
            this.auth.isSignedIn.listen(this.onAuthChange); // "listen" passes boolean to arg of whether signed in
        });
       }); // callback fxn only executes after additional JS code downloaded from Google server
    }

    onAuthChange = (isSignedIn) => { // context is bound to the component, due to arrow function definition
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() { // only put () on methods if you want to execute them AS SOON AS they're rendered
        if (this.props.isSignedIn === null) {
            return <div>Dunno if anyone's signed in!</div>;
        } else if (this.props.isSignedIn) {
            return (
                <button className="ui red google button" onClick={this.onSignOutClick} >
                    <i className="google icon" />
                    Sign out
                </button>
            );
        } else {
            return (
                <button className="ui red google button" onClick={this.onSignInClick} >
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

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }; // defines props
};

export default connect(
    mapStateToProps,
    { signIn, signOut }
)(GoogleAuth);