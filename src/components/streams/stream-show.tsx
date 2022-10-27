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

    let player: any;
    useEffect(() => {
        fetchStream(id);
        buildPlayer();
    }, []);

    useEffect(() => {
        buildPlayer();
    });

    const buildPlayer = () => {
        if (player || !stream) {
            return;
        }
        player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`,
        });
        player.attachMediaElement(videoRef.current);
        player.load();
    };

    if (!stream) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <video ref={videoRef} style={{ width: '100%' }} controls />
            <h1>{stream.title}</h1>
            <h5>{stream.description}</h5>
        </div>
    );
};

export default StreamShow;
