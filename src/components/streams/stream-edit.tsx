import { useEffect } from 'react';
import { useAction } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';

const StreamEdit: React.FC<any> = (props) => {
    const stream = useTypedSelector(
        //@ts-ignore
        (state) => state.streams[props.match.params.id]
    );

    const { fetchStream } = useAction();

    useEffect(() => {
        fetchStream(props.match.params.id);
    }, []);
    console.log(stream);
    return <div>StreamEdit</div>;
};

export default StreamEdit;
