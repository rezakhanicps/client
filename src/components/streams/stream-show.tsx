import { useEffect, useRef } from 'react';
import flv from 'flv.js';
import { useAction } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';

const StreamShow: React.FC<any> = (props) => {
    const { id } = props.match.params;
    const { fetchStream } = useAction();
    const videoRef = useRef<any>(null);
    //@ts-ignore
    const stream = useTypedSelector((state) => state.streams[id]);

    useEffect(() => {
        fetchStream(id);
        let player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`,
        });
        player.attachMediaElement(videoRef.current);
        player.load();
        return () => {
            player.destroy();
        };
    }, []);


    return (
        <div>
            <video ref={videoRef} style={{ width: '100%' }} controls />
            <h1>{stream?.title}</h1>
            <h5>{stream?.description}</h5>
        </div>
    );
};

export default StreamShow;
