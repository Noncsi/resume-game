export enum AssetKey {
  map = 'map',
  player = 'player',
  water = 'water',
  grass = 'grass',
  forest = 'forest',
}

export enum Direction {
  left = 'left',
  right = 'right',
  up = 'up',
  down = 'down',
}

interface Movement {
  velocity: { x: number; y: number };
  animation: string;
}

export const VELOCITY = 130;

export const MOVEMENT_MAP: Record<Direction, Movement> = {
  [Direction.left]: { velocity: { x: -VELOCITY, y: 0 }, animation: Direction.left },
  [Direction.right]: { velocity: { x: VELOCITY, y: 0 }, animation: Direction.right },
  [Direction.up]: { velocity: { x: 0, y: -VELOCITY }, animation: Direction.up },
  [Direction.down]: { velocity: { x: 0, y: VELOCITY }, animation: Direction.down },
};
