export type Playlist = Array<Track>;

export type Track = {
  audio: string;
  id: number
  metadata: TrackMetadata;
};

export type TrackMetadata = {
  imagem: string;
  nome: string;
};

/* === Controls === */
export type Controls = {
  setPlaybackPosition: (position: number) => void;
  toggleShuffle: () => void;
  toggleRepeat: () => void;
  togglePlayPause: () => void;
  playNextTrack: () => void;
  playPreviousTrack: () => void;
  cleanup: () => void;
};

/* === Playerstate === */
export type PlayerState = {
  currentTrackDuration: number | null;
  currentTrackPlaybackPosition: number | null;
  currentTrackMetadata: TrackMetadata | null;
  playbackState: PlaybackState;
  repeat: boolean;
  shuffle: boolean;
};

export type PlaybackState = 'PLAYING' | 'PAUSED';

export const InitialPlayerState: PlayerState = {
  currentTrackDuration: null,
  currentTrackPlaybackPosition: null,
  currentTrackMetadata: null,
  playbackState: 'PAUSED',
  repeat: false,
  shuffle: false,
};
