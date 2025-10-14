import { KEY } from '../models/keys';
import { IInteractableAreaConfig } from '../models/types';

export const INTERACTABLE_AREA_CONFIGS: IInteractableAreaConfig[] = [
  {
    key: KEY.area.well,
    position: { x: 483, y: 168 },
    title: 'The Well of Knowledge',
    subTitle: '<em>"Clear waters run deep; every ripple holds a lesson."</em><br/>',
    content: `
    <strong>Skills:</strong>
    • JavaScript, TypeScript
    • Angular, RxJs, NgRx
    • HTML5, CSS + preprocessors like SCSS
    • Phaser & game prototyping
    • Node.js`,
    containsCVFragment: true,
    customSize: { width: 64, height: 100 },
    customOffset: { x: -24, y: -6 },
    links: [{ label: 'GitHub', href: 'https://github.com/Noncsi' }],
  },
  {
    key: KEY.area.house,
    position: { x: 208, y: 230 },
    title: 'The Cozy Cabin',
    subTitle: '<em>"A hearth where stories begin."</em><br/>',
    content: `
This cabin is my workspace - quiet, focused, and familiar.
I've spent years creating from here, building worlds line by line.`,
    containsCVFragment: false,
  },
  {
    key: KEY.area.mushroom,
    position: { x: 736, y: 190 },
    title: 'The Mushroom Grove',
    subTitle: '<em>"Hidden among the roots, small wonders thrive."</em><br/>',
    content: `
    <strong>Projects:</strong>
    • Resume Game (You are here!) (Angular20 + Phaser3)`,
    containsCVFragment: true,
    footer: `Each project is a curious little mushroom - 
    some small, some towering, all grown with care.`,
  },
  {
    key: KEY.area.flowers,
    position: { x: 976, y: 535 },
    title: 'The Blooming Meadow',
    subTitle: '<em>"Every petal tells a story of growth."</em><br/>',
    content: `
    <strong>Soft Skills:</strong>
    • Collaborative spirit
    • Crafting user-friendly experiences
    • Writing clean, maintainable code
    • Blending creativity with logic`,
    containsCVFragment: true,
  },
  {
    key: KEY.area.stones,
    position: { x: 328, y: 620 },
    title: 'The Circle of Stones',
    subTitle: '<em>"Silent witnesses to time and perseverance."</em><br/>',
    content: `
    <strong>Experience:</strong><br/>
    • Optin Kft., Fullstack Developer, 3 months
    • Cloudera Inc., Software Developer, 3 years 8 months
    • Asura Technologies, Frontend Developer, 3 months
    • Digic Pictures Kft., Production Developer, 3 years<br/>`,
    containsCVFragment: true,
    footer: `Every stone stands for a milestone - solid, enduring.`,
  },
  {
    key: KEY.area.mailbox,
    position: { x: 410, y: 296 },
    title: 'Mailbox',
    subTitle: '<em>"Leave a note by the door."</em><br/><br/>',
    content: `
    📧 <a href="mailto:lengyel.noemi96@gmail.com">lengyel.noemi96@gmail.com</a>
    💼 <a href="https://linkedin.com/in/yourname" target="_blank">LinkedIn</a>
    💻 <a href="https://github.com/yourname" target="_blank">GitHub</a>`,
    containsCVFragment: true,
    customSize: { width: 32, height: 64 },
    customOffset: { x: 0, y: -16 },
    links: [
      { label: 'Email', href: 'mailto:lengyel.noemi96@gmail.com' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/noemilengyel' },
      { label: 'GitHub', href: 'https://github.com/Noncsi' },
    ],
  },
  {
    key: KEY.area.country,
    position: { x: 460, y: 480 },
    title: 'My home country - Hungary',
    subTitle: '',
    content: ``,
    containsCVFragment: false,
  },
];
