import { KEY } from '../models/keys';
import { IAudioConfig } from '../models/types';

export const AUDIO_CONFIGS: IAudioConfig[] = [
  {
    key: KEY.audio.backgroundMusic,
    url: 'assets/audios/background-music.mp3',
    IsLooping: true,
    volume: 0.5,
  },
  {
    key: KEY.audio.hey,
    url: 'assets/audios/hey.ogg',
    IsLooping: false,
  },
];
