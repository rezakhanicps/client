import React, { useEffect } from 'react';
import history from '../../history';
import { useAction } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import Modal from '../Modal';

const StreamDelete: React.FC<any> = (props) => {
    const { fetchStream } = useAction();
    const stream = useTypedSelector(
        // @ts-ignore
        (state) => state.streams[props.match.params.id]
    );

    const actions = (
        <React.Fragment>
            <button className="ui button negative">Delete</button>
            <button className="ui button">Cancel</button>
        </React.Fragment>
    );

    useEffect(() => {
        fetchStream(props.match.params.id);
    }, []);

    const renderContent = (): string => {
        if (!stream) {
            return 'Are you sure you want to delete this stream?';
        }
        return `Are you sure you want to delete this stream with title:  ${stream.title}`;
    };

    return (
        <Modal
            title="Delete Stream"
            content={renderContent()}
            actions={actions}
            onDismiss={() => history.push('/')}
        />
    );
};

export default StreamDelete;
