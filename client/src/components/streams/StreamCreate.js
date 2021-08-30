import React from 'react';
import { Field, reduxForm } from 'redux-form'; // Field is a react component; reduxForm is a function

class StreamCreate extends React.Component {
    // every react input element should be "controlled"...
    renderInput( {input, label, meta} ) {
        // shortened syntax for redux-form adds all properties of input as props of that component:
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} />
                <div>{meta.error}</div>
            </div>
        );
    }

    onSubmit(formValues) {
        // event.preventDefault();  // <-- this is handled by Redux Form
        console.log(formValues);
    }

    render() {
        return (
            <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

// Validation function for Redux Forms
const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        // only when no title entered...
        errors.title = 'You must enter a title.';
    }
    if (!formValues.description) {
        errors.description = 'You must enter a description.';
    }
    return errors;
};

export default reduxForm({
    form: 'streamCreate',
    validate // equivalent to:    validate: validate
})(StreamCreate);