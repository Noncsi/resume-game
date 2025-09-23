import { KEY } from '../models/keys';
import { IInteractableAreaConfig } from '../models/types';

export const INTERACTABLE_AREA_CONFIGS: IInteractableAreaConfig[] = [
  {
    key: KEY.area.well,
    eventKey: KEY.event.interactWithWell,
    title: 'The Well of Knowledge',
    content: `<em>"Clear waters run deep; every ripple holds a lesson."</em><br/><br/>
    <strong>Skills:</strong><br/>
    • JavaScript (5 years)<br/>
    • Angular, NgRx<br/>
    • Phaser & game prototyping<br/>
    • Node.js, Express<br/>`,
    links: [
      { label: 'GitHub', href: 'https://github.com/yourname' },
      { label: 'Portfolio', href: 'https://your.site' },
    ],
  },
  {
    key: KEY.area.house,
    eventKey: KEY.event.interactWithHouse,
    title: 'The Cozy Cabin',
    content: `<em>"A hearth where stories begin."</em><br/><br/>
    Welcome to my interactive résumé.<br/>
    This cabin is home, a place of grounding.<br/>
    Step outside, and each landmark reveals a part of me.`,
  },
  {
    key: KEY.area.mushroom,
    eventKey: KEY.event.interactWithMushrooms,
    title: 'The Mushroom Grove',
    content: `<em>"Hidden among the roots, small wonders thrive."</em><br/><br/>
    <strong>Projects:</strong><br/>
    • Portfolio Website (Angular + Tailwind)<br/>
    • Multiplayer Phaser Game Prototype<br/>
    • Task Management App (NgRx + Firebase)<br/>
    • API Gateway in Node.js<br/>
    Each project is a curious little mushroom — 
    some small, some towering, all grown with care.`,
  },
  {
    key: KEY.area.flowers,
    eventKey: KEY.event.interactWithFlowers,
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
    eventKey: KEY.event.interactWithStones,
    title: 'The Circle of Stones',
    content: `<em>"Silent witnesses to time and perseverance."</em><br/><br/>
    <strong>Experience:</strong><br/>
    • Software Developer, 3+ years<br/>
    • Freelance web applications<br/>
    • Open-source contributions<br/>
    • Mentoring junior developers<br/><br/>
    Every stone stands for a milestone — solid, enduring.`,
  },
  {
    key: KEY.area.mailbox,
    eventKey: KEY.event.interactWithMailbox,
    title: 'Mailbox',
    content: `<em>"Leave a note by the door."</em><br/><br/>
    📧 <a href="mailto:your@email.com">your@email.com</a><br/>
    💼 <a href="https://linkedin.com/in/yourname" target="_blank">LinkedIn</a><br/>
    💻 <a href="https://github.com/yourname" target="_blank">GitHub</a>`,
    links: [
      { label: 'Email', href: 'mailto:your@email.com' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/yourname' },
      { label: 'GitHub', href: 'https://github.com/yourname' },
    ],
  },
];