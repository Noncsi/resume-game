import { KEY } from '../models/keys';
import { IButtonConfig } from '../models/types';

export const BUTTON_CONFIGS: Record<string, IButtonConfig> = {
  [KEY.button.muteMusic]: {
    position: { x: 700, y: 20 },
    text: '🔊 Music',
    fixed: true
  },
  [KEY.button.muteSounds]: {
    position: { x: 600, y: 20 },
    text: '🔊 Sound effects',
    fixed: true
  },
  [KEY.button.restart]: {
    position: { x: 500, y: 20 },
    text: '❓ Restart',
    fixed: true
  }
};
