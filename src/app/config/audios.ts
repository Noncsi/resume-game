import { AudioKey } from '../models/keys';
import { IAudioConfig } from '../models/types';

export const AUDIO_CONFIGS: IAudioConfig[] = [
  {
    key: AudioKey.BackgroundMusic,
    url: 'assets/audios/background-music.mp3',
    IsLooping: true,
    volume: 0.5,
  },
  {
    key: AudioKey.Hey,
    url: 'assets/audios/hey.ogg',
    IsLooping: false,
  },
  {
    key: AudioKey.Footsteps,
    url: 'assets/audios/footsteps.mp3',
    IsLooping: true,
    rate: 1.6,
  },
];
