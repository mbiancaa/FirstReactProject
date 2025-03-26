import { useRef } from "react";

const PlayerVideo = ({ videoSrc }) => {
    const videoPlayerRef = useRef();

    const playVideo = () => {
        videoPlayerRef.current.play();
    }

    const pauseVideo = () => {
        videoPlayerRef.current.pause();
    }

    return (
        <>
            <div>
                <video ref={videoPlayerRef} src={videoSrc}>
                    Sorry, doesn't work. Try again later.
                </video>
            </div>
            <div>
                <button onClick={playVideo}>Play</button>
                <button onClick={pauseVideo}>Pause</button>
            </div>
        </>
    );
}

export default PlayerVideo;