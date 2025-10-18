import { InteractableAreaKey } from '../models/keys';
import { IInteractableAreaConfig } from '../models/types';

export const INTERACTABLE_AREA_CONFIGS: IInteractableAreaConfig[] = [
  {
    key: InteractableAreaKey.Well,
    position: { x: 483, y: 168 },
    title: 'The Well of Knowledge',
    subTitle: '"Clear waters run deep; every ripple holds a lesson."',
    category: 'Skills:',
    content: `    ■ JavaScript, TypeScript, Node.js<br>
    ■ Angular, RxJs, NgRx<br>
    ■ HTML5, CSS + preprocessors`,
    containsCVFragment: true,
    customSize: { width: 64, height: 100 },
    customOffset: { x: -24, y: -6 },
    links: [{ label: 'GitHub', href: 'https://github.com/Noncsi' }],
  },
  {
    key: InteractableAreaKey.House,
    position: { x: 208, y: 230 },
    title: 'The Cozy Cabin',
    subTitle: '"A hearth where stories begin."',
    content: `
This cabin is my workspace - quiet, focused, and familiar.
I've spent years creating from here, building worlds line by line.`,
    containsCVFragment: false,
  },
  {
    key: InteractableAreaKey.Mushroom,
    position: { x: 736, y: 190 },
    title: 'The Mushroom Grove',
    subTitle: '"Hidden among the roots, small wonders thrive."',
    category: 'Projects:',
    content: `    ■ Resume Game (You are here!) (Angular20 + Phaser3)`,
    containsCVFragment: false,
    footer: `Each project is a curious little mushroom - 
    some small, some towering, all grown with care.`,
  },
  {
    key: InteractableAreaKey.Flowers,
    position: { x: 864, y: 530 },
    title: 'The Blooming Meadow',
    subTitle: '"Every petal tells a story of growth."',
    category: 'Soft Skills:',
    content: `    ■ Crafting user-friendly experiences<br>
    ■ Writing clean, maintainable code<br>
    ■ Blending creativity with logic`,
    containsCVFragment: true,
  },
  {
    key: InteractableAreaKey.Stones,
    position: { x: 282, y: 544 },
    title: 'The Circle of Stones',
    subTitle: '"Silent witnesses to time and perseverance."',
    category: 'Experience:',
    content: `    ■ Optin - Fullstack Developer<br>
    ■ Cloudera - Software Developer<br>
    ■ Asura Technologies - Frontend Developer<br>
    ■ Digic Pictures - Production Developer`,
    containsCVFragment: true,
    footer: `Every stone stands for a milestone - solid, enduring.`,
  },
  {
    key: InteractableAreaKey.Mailbox,
    position: { x: 410, y: 296 },
    title: 'Mailbox',
    subTitle: '"Leave a note by the door."',
    content: `    <img src="../../assets/icons/envelope.png"> <a href="mailto:lengyel.noemi96@gmail.com">lengyel.noemi96@gmail.com</a><br>
    <img src="../../assets/icons/linkedin.png"> <a href="https://linkedin.com/in/noemilengyel" target="_blank">LinkedIn</a><br>
    <img src="../../assets/icons/github.png"> <a href="https://github.com/Noncsi" target="_blank">GitHub</a>`,
    containsCVFragment: true,
    customSize: { width: 32, height: 64 },
    customOffset: { x: 0, y: -16 },
  },
  {
    key: InteractableAreaKey.Country,
    position: { x: 460, y: 480 },
    title: 'My home country',
    subTitle: 'Hungary',
    content: `My home, a land of warm flavors and open skies,
where paprika colors life, and the quiet fields feel like peace.`,
    containsCVFragment: false,
  },
];
