import { useEffect } from 'react';
import { useAction } from '../../hooks/use-actions';

const StreamList = () => {
    const { fetchStreams } = useAction();

    useEffect(() => {
        fetchStreams();
    }, []);

    return <div>StreamList</div>;
};

export default StreamList;
