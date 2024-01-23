import { useEffect, useRef, useState } from "react";
import { Controls, InitialPlayerState, PlayerState, Playlist } from "./Types";
import { createAudioplayer } from "./audioplayer";

interface AudioPlayer extends Controls {
  playerState: PlayerState;
  playSpecificTrack: (trackIndex: number) => void;
  showPlayer: boolean; // Certifique-se de que esta propriedade está sendo retornada pelo seu hook
}


function useAudioPlayer(beats: Playlist) : AudioPlayer {
    const [playerState, setPlayerState] =
    useState<PlayerState>(InitialPlayerState);
    const [showPlayer, setShowPlayer] = useState(false);
    const playerRef = useRef<Controls | null>(null);

    useEffect(() => {
        const newPlayer = createAudioplayer(beats, setPlayerState);
        playerRef.current = newPlayer;
        return () => {
            newPlayer.cleanup();
          };
        }, [beats]);

        function playSpecificTrack(trackIndex: number) {
          playerRef.current?.playSpecificTrack(trackIndex);
        }

        function playAudio(beatId: number) {
          const trackIndex = beats.findIndex((beat) => beat.id === beatId);
          if (trackIndex !== -1) {
            setShowPlayer(true);
            playerRef.current?.setPlaybackPosition(0);
            playerRef.current?.playSpecificTrack(trackIndex);
          }
        }
      
        function setPlaybackPosition(position: number) {
          playerRef.current?.setPlaybackPosition(position);
        }
      
        function toggleShuffle() {
          playerRef.current?.toggleShuffle();
        }
      
        function toggleRepeat() {
          playerRef.current?.toggleRepeat();
        }
      
        function togglePlayPause() {
          playerRef.current?.togglePlayPause();
        }
      
        function playNextTrack() {
          playerRef.current?.playNextTrack();
        }
      
        function playPreviousTrack() {
          playerRef.current?.playPreviousTrack();
        }
      
        function cleanup() {
          playerRef.current?.cleanup();
        }
      
        return {
          setPlaybackPosition,
          playerState,
          toggleShuffle,
          toggleRepeat,
          togglePlayPause,
          playNextTrack,
          playPreviousTrack,
          cleanup,
          playAudio,
          showPlayer,
        };
      }
      
      export default useAudioPlayer;