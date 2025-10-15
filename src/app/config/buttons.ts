import { KEY } from '../models/keys';
import { IButtonConfig } from '../models/types';

export const BUTTON_CONFIGS: IButtonConfig[] = [
  { key: KEY.button.muteMusic, position: { x: 980, y: 16 }, text: '🔊 Music', text2: '🔇 Music' },
  {
    key: KEY.button.muteSounds,
    position: { x: 860, y: 16 },
    text: '🔊 Sound',
    text2: '🔇 Sound',
  },
];
