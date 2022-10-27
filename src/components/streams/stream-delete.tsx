import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import history from '../../history';
import { useAction } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import Modal from '../Modal';

const StreamDelete: React.FC<any> = (props) => {
    const { id } = props.match.params;
    const { fetchStream, deleteStream } = useAction();
    const stream = useTypedSelector(
        // @ts-ignore
        (state) => state.streams[id]
    );

    const actions = (
        <React.Fragment>
            <button
                onClick={() => deleteStream(id)}
                className="ui button negative"
            >
                Delete
            </button>
            <Link to="/" className="ui button">
                Cancel
            </Link>
        </React.Fragment>
    );

    useEffect(() => {
        fetchStream(id);
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
