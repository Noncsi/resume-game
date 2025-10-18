import { TextKey } from '../models/keys';

const defaultStyle = {
  fontSize: '16px',
  color: '#ffffffff',
  backgroundColor: '#252525e0',
  padding: { x: 8, y: 4 },
};

export const TEXT_CONFIGS = new Map([
  [
    TextKey.Prompt,
    {
      text: '[E] interact',
      style: defaultStyle,
    },
  ],
]);
