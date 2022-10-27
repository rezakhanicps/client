import { useEffect } from 'react';
import { useAction } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import StreamForm from './stream-form';

const StreamEdit: React.FC<any> = (props) => {
    const stream = useTypedSelector(
        //@ts-ignore
        (state) => state.streams[props.match.params.id]
    );

    const { fetchStream, editStream } = useAction();

    useEffect(() => {
        fetchStream(props.match.params.id);
    }, []);

    const onSubmit = (formValues: any) => {
        console.log(formValues);
    };

    return (
        <div>
            {stream ? (
                <div>
                    <h3>Edit a Stream</h3>
                    <StreamForm initialValues={stream} onSubmit={onSubmit} />
                </div>
            ) : (
                <div>=Loading...</div>
            )}
        </div>
    );
};

export default StreamEdit;
