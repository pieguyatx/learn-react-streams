import React from 'react';
import { Field, reduxForm } from 'redux-form'; // Field is a react component; reduxForm is a function

class StreamCreate extends React.Component {
    // every react input element should be "controlled"...
    renderInput( {input, label} ) {
        // shortened syntax for redux-form adds all properties of input as props of that component:
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} />
            </div>
        );
    }

    render() {
        return (
            <form className="ui form">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
            </form>
        );
    }
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);