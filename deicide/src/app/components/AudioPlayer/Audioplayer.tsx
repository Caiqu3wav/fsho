import { beats } from "@/app/api/beats/route";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import SongInfo from "./SongInfo";
import useAudioPlayer from "@/app/AudioBack/hooks";

const AudioPlayer = () => {
    const {
      playNextTrack,
      playPreviousTrack,
      playSpecificTrack,
      playerState,
      togglePlayPause,
      toggleRepeat,
      toggleShuffle,
      setPlaybackPosition,
    } = useAudioPlayer(beats);
  
    const {
      repeat,
      playbackState,
      shuffle,
      currentTrackDuration,
      currentTrackPlaybackPosition,
      currentTrackMetadata,
    } = playerState;
  
    function setProgress(value: number) {
      if (currentTrackDuration !== null) {
        setPlaybackPosition((value / 100) * currentTrackDuration);
      }
    }
  
    function computeProgress(): number {
      const noProgress =
        currentTrackDuration === null ||
        currentTrackPlaybackPosition === null ||
        currentTrackDuration === 0;
      if (noProgress) {
        return 0;
      } else {
        return (currentTrackPlaybackPosition / currentTrackDuration) * 100;
      }
    }

    function playSpecificTrackHandler(beatId: number) {
      const trackIndex = beats.findIndex((beat) => beat.id === beatId);
      if (trackIndex !== -1) {
        playSpecificTrack(trackIndex);
      }
    }

  
    return (
      <div className="flex flex-col items-center">
        <SongInfo
          nome={currentTrackMetadata?.nome}
          imagem={currentTrackMetadata?.imagem}
        />
        <ProgressBar
          rightLabel={formatTime(currentTrackDuration)}
          leftLabel={formatTime(currentTrackPlaybackPosition)}
          onChange={setProgress}
          progress={computeProgress()}
        />
        <Controls
          shuffle={shuffle}
          repeat={repeat}
          onShuffleClick={toggleShuffle}
          onRepeatClick={toggleRepeat}
          onPrevClick={playPreviousTrack}
          onNextClick={playNextTrack}
          onPlayClick={togglePlayPause}
          isPlaying={playbackState === 'PLAYING'}
        />
      </div>
    );
  };
  
  export default AudioPlayer;
  
  function formatTime(timeInSeconds: number | null): string {
    if (timeInSeconds === null) return '';
    const numberOfMinutes = Math.floor(timeInSeconds / 60);
    const numberOfSeconds = Math.floor(timeInSeconds - numberOfMinutes * 60);
    const minutes = `${numberOfMinutes}`.padStart(2, '0');
    const seconds = `${numberOfSeconds}`.padStart(2, '0');
    return `${minutes}:${seconds}`;
  }