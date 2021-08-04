import React from 'react';
import { Field, reduxForm } from 'redux-form'; // Field is a react component; reduxForm is a function

class StreamCreate extends React.Component {
    // every react input element should be "controlled"...
    renderInput( {input} ) {
        // shortened syntax for redux-form adds all properties of input as props of that component:
        return (
            <input {...input} />
        );
    }

    render() {
        return (
            <form>
                <Field name="title" component={this.renderInput} />
                <Field name="description" component={this.renderInput} />
            </form>
        );
    }
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);