import { KEY } from '../models/keys';
import { IInteractableAreaConfig } from '../models/types';

export const INTERACTABLE_AREA_CONFIGS: IInteractableAreaConfig[] = [
  {
    key: KEY.area.well,
    position: { x: 675, y: 190 },
    title: 'The Well of Knowledge',
    content: `<em>"Clear waters run deep; every ripple holds a lesson."</em><br/><br/>
    <strong>Skills:</strong><br/>
    • JavaScript, TypeScript<br/>
    • Angular20, RxJs, NgRx<br/>
    • HTML5, CSS + preprocessors like SCSS<br/>
    • Phaser & game prototyping<br/>
    • Node.js<br/>`,
    customSize: { width: 64, height: 80 },
    customOffset: { x: -24, y: -16 },
    links: [
      { label: 'GitHub', href: 'https://github.com/Noncsi' },
    ],
  },
  {
    key: KEY.area.house,
    position: { x: 400, y: 230 },
    title: 'The Cozy Cabin',
    content: `<em>"A hearth where stories begin."</em><br/><br/>
    Welcome to my interactive resume.<br/>
    This cabin is home, a place of grounding.<br/>
    Step outside, and each landmark reveals a part of me.`,
  },
  {
    key: KEY.area.mushroom,
    position: { x: 930, y: 170 },
    title: 'The Mushroom Grove',
    content: `<em>"Hidden among the roots, small wonders thrive."</em><br/><br/>
    <strong>Projects:</strong><br/>
    • Resume Game (You are here!) (Angular20 + Phaser3)<br/>
    Each project is a curious little mushroom - 
    some small, some towering, all grown with care.`,
  },
  {
    key: KEY.area.flowers,
    position: { x: 1168, y: 555 },
    title: 'The Blooming Meadow',
    content: `<em>"Every petal tells a story of growth."</em><br/><br/>
    <strong>Values:</strong><br/>
    • Collaborative spirit<br/>
    • Lifelong learning<br/>
    • Crafting user-friendly experiences<br/>
    • Writing clean, maintainable code<br/>
    • Blending creativity with logic`,
  },
  {
    key: KEY.area.stones,
    position: { x: 568, y: 450 },
    title: 'The Circle of Stones',
    content: `<em>"Silent witnesses to time and perseverance."</em><br/><br/>
    <strong>Experience:</strong><br/>
    • Optin Kft., Fullstack Developer, 3 months<br/>
    • Cloudera Inc., Software Developer, 3 years 8 months<br/>
    • Asura Technologies, Frontend Developer, 3 months<br/>
    • Digic Pictures Kft., Production Developer, 3 years<br/><br/>
    Every stone stands for a milestone - solid, enduring.`,
  },
  {
    key: KEY.area.mailbox,
    position: { x: 585, y: 300 },
    title: 'Mailbox',
    content: `<em>"Leave a note by the door."</em><br/><br/>
    📧 <a href="mailto:lengyel.noemi96@gmail.com">lengyel.noemi96@gmail.com</a><br/>
    💼 <a href="https://linkedin.com/in/yourname" target="_blank">LinkedIn</a><br/>
    💻 <a href="https://github.com/yourname" target="_blank">GitHub</a>`,
    customSize: { width: 32, height: 64 },
    customOffset: { x: 0, y: -16 },
    links: [
      { label: 'Email', href: 'mailto:lengyel.noemi96@gmail.com' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/noemilengyel' },
      { label: 'GitHub', href: 'https://github.com/Noncsi' },
    ],
  },
];
