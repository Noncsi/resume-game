import { KEY } from '../models/keys';
import { ITextConfig } from '../models/types';

export const TEXT_CONFIGS: ITextConfig[] = [
  {
    key: KEY.text.prompt,
    position: {x: 200, y: 200},
    text: 'Press [E] to interact',
    style: {
      fontSize: '16px',
      color: '#d3ff11ff',
      backgroundColor: '#051a17ff',
      padding: { x: 8, y: 4 },
    },
  },
];
