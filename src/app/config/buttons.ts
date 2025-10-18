import { ButtonKey } from '../models/keys';
import { IButtonConfig } from '../models/types';

export const BUTTON_CONFIGS: IButtonConfig[] = [
  { key: ButtonKey.MuteMusic, position: { x: 980, y: 16 }, text: '🔊 Music', text2: '🔇 Music' },
  {
    key: ButtonKey.MuteSounds,
    position: { x: 860, y: 16 },
    text: '🔊 Sound',
    text2: '🔇 Sound',
  },
];
