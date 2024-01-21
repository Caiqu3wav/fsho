import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import SongInfo from "./SongInfo";

const AudioPlayer = () => {

    return (
        <div className="flex flex-col items-center">
            <SongInfo/>
            <ProgressBar/>
            <Controls/>
            </div>
    );

}

export default AudioPlayer;