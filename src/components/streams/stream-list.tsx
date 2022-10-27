import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAction } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import { StreamState } from '../../state/reducers/streamReducer';

const StreamList = () => {
    const { fetchStreams } = useAction();
    const { streams, currentUserId, isSignedIn } = useTypedSelector((state) => {
        return {
            streams: Object.values(state.streams),
            currentUserId: state.auth.userId,
            isSignedIn: state.auth.isSignedIn,
        };
    });
    useEffect(() => {
        fetchStreams();
    }, []);

    const renderAdmin = (stream: StreamState) => {
        if (stream.userId === currentUserId) {
            return (
                <div className="right floated content">
                    <Link
                        to={`/streams/edit/${stream.id}`}
                        className="ui button primary"
                    >
                        Edit
                    </Link>
                    <button className="ui button negative">Delete</button>
                </div>
            );
        }
    };

    const renderList = () => {
        return streams.map((stream: any) => {
            return (
                <div className="item" key={stream.id}>
                    {renderAdmin(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        {stream.title}
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            );
        });
    };

    const renderCreate = () => {
        if (isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/streams/new" className="ui button primary">
                        Create Stream
                    </Link>
                </div>
            );
        }
    };

    return (
        <div>
            <h2>Streams</h2>
            <div className="ui celled list">{renderList()}</div>
            {renderCreate()}
        </div>
    );
};

export default StreamList;
