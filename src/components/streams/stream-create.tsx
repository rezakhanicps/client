import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../state/action-creators';
import StreamForm from './stream-form';
class StreamCreate extends React.Component<any> {
    onSubmit = (formValues: any) => {
        this.props.createStream(formValues);
    };

    render(): React.ReactNode {
        return (
            <div>
                <h3>Create Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(null, { createStream })(StreamCreate);
