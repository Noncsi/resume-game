import { Direction, IMovement } from "../models/types";

export const VELOCITY = 100;

export const MOVEMENT_MAP: Record<Direction, IMovement> = {
  [Direction.left]: { velocity: { x: -VELOCITY, y: 0 }, animationKey: Direction.left },
  [Direction.right]: { velocity: { x: VELOCITY, y: 0 }, animationKey: Direction.right },
  [Direction.up]: { velocity: { x: 0, y: -VELOCITY }, animationKey: Direction.up },
  [Direction.down]: { velocity: { x: 0, y: VELOCITY }, animationKey: Direction.down },
};