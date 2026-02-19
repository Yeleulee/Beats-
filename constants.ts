import { Playlist, Song } from './types';

const SONG_COVERS = [
  "https://picsum.photos/id/10/800/800",
  "https://picsum.photos/id/11/800/800",
  "https://picsum.photos/id/12/800/800",
  "https://picsum.photos/id/13/800/800",
  "https://picsum.photos/id/14/800/800",
  "https://picsum.photos/id/15/800/800",
  "https://picsum.photos/id/16/800/800",
  "https://picsum.photos/id/17/800/800",
];

export const ETHIO_JAZZ_SONGS: Song[] = [
  {
    id: '1',
    title: 'Tezeta (Nostalgia)',
    artist: 'Mulatu Astatke',
    artistAmharic: 'ሙላቱ አስታጥቄ',
    coverUrl: SONG_COVERS[0],
    duration: 345,
    genre: 'Ethio-Jazz'
  },
  {
    id: '2',
    title: 'Yegelle Tezeta',
    artist: 'Mulatu Astatke',
    artistAmharic: 'ሙላቱ አስታጥቄ',
    coverUrl: SONG_COVERS[1],
    duration: 198,
    genre: 'Ethio-Jazz'
  },
  {
    id: '3',
    title: 'Muziqawi Silt',
    artist: 'Hailu Mergia',
    artistAmharic: 'ሀይሉ መርጊያ',
    coverUrl: SONG_COVERS[2],
    duration: 250,
    genre: 'Ethio-Jazz'
  }
];

export const TIZITA_SONGS: Song[] = [
  {
    id: '4',
    title: 'Tizita',
    artist: 'Mahmoud Ahmed',
    artistAmharic: 'ማህሙድ አህመድ',
    coverUrl: SONG_COVERS[3],
    duration: 410,
    genre: 'Tizita'
  },
  {
    id: '5',
    title: 'Fikir Ayarejim',
    artist: 'Aster Aweke',
    artistAmharic: 'አስቴር አወቀ',
    coverUrl: SONG_COVERS[4],
    duration: 290,
    genre: 'Ballad'
  }
];

export const NEW_RELEASES: Song[] = [
  {
    id: '6',
    title: 'Gela',
    artist: 'Rophnan',
    artistAmharic: 'ሮፍናን',
    coverUrl: SONG_COVERS[5],
    duration: 215,
    genre: 'Electronic'
  },
  {
    id: '7',
    title: 'Ethiopia',
    artist: 'Teddy Afro',
    artistAmharic: 'ቴዲ አፍሮ',
    coverUrl: SONG_COVERS[6],
    duration: 335,
    genre: 'Pop'
  }
];

export const PLAYLISTS: Playlist[] = [
  { id: 'p1', title: 'Ethio-Jazz Classics', songs: ETHIO_JAZZ_SONGS },
  { id: 'p2', title: 'Tizita Essentials', songs: TIZITA_SONGS },
  { id: 'p3', title: 'New Releases', songs: NEW_RELEASES },
];