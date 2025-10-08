import { KEY } from '../models/keys';
import { IButtonConfig } from '../models/types';

export const BUTTON_CONFIGS: IButtonConfig[] = [
  { key: KEY.button.muteMusic, position: { x: 1400, y: 20 }, text: '🔊 Music', text2: '🔇 Music', fixed: true },
  {
    key: KEY.button.muteSounds,
    position: { x: 600, y: 20 },
    text: '🔊 Sound effects',
    fixed: true,
  },
  { key: KEY.button.restart, position: { x: 500, y: 20 }, text: '❓ Restart', fixed: true },
];
