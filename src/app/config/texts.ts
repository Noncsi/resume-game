import { KEY } from '../models/keys';
import { ITextConfig } from '../models/types';

export const TEXT_CONFIGS: ITextConfig[] = [
  {
    key: KEY.text.prompt,
    position: { x: 200, y: 200 },
    text: 'Press [E] to interact',
    style: {
      fontSize: '16px',
      color: '#d3ff11ff',
      backgroundColor: '#051a17ff',
      padding: { x: 8, y: 4 },
    },
  },
  {
    key: 'greeting',
    position: { x: 365, y: 280 },
    text: 'Greetings, visitor! It seems like the forest animals took my resumé, would you help me find it? [Press any arrow key to continue...]',
    style: {
      fontSize: '16px',
      color: '#f0f0f0ff',
      backgroundColor: '#494949c7',
      wordWrap: { width: 200 },
      padding: { x: 8, y: 4 },
      align: 'center',
    },
  },
];
