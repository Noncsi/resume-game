import { KEY } from '../models/keys';
import { IButtonConfig } from '../models/types';

export const BUTTON_CONFIGS: IButtonConfig[] = [
  { key: KEY.button.muteMusic, position: { x: 980, y: 20 }, text: '🔊 Music', text2: '🔇 Music' },
  {
    key: KEY.button.muteSounds,
    position: { x: 980, y: 50 },
    text: '🔊 Sound',
  },
];
