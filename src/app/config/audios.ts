import { KEY } from "../models/keys";
import { IAudioConfig } from "../models/types";

export const AUDIO_CONFIGS: IAudioConfig[] = [
  {
    key: KEY.audio.backgroundMusic,
    url: 'assets/audios/background-music.mp3',
    IsLooping: true,
  },
];
