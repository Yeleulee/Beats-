export interface Song {
  id: string;
  title: string;
  artist: string;
  artistAmharic?: string;
  coverUrl: string;
  duration: number; // in seconds
  genre: string;
}

export interface Playlist {
  id: string;
  title: string;
  songs: Song[];
}

export interface PlayerState {
  currentSong: Song | null;
  isPlaying: boolean;
  progress: number; // 0 to 1
  isExpanded: boolean;
  volume: number;
}