import React from 'react';
import { Field, reduxForm } from 'redux-form';
class StreamCreate extends React.Component {
    renderInput(formProps: any) {
        console.log(formProps.input.onChange);
        return (
            <input
                onChange={formProps.input.onChange}
                value={formProps.input.value}
            />
        );
    }

    render(): React.ReactNode {
        console.log(this.props);
        return (
            <form>
                <Field name="title" component={this.renderInput} />
                <Field name="description" component={this.renderInput} />
            </form>
        );
    }
}

export default reduxForm({
    form: 'streamCreate',
    //@ts-ignore
})(StreamCreate);
