export enum TilesetKey {
  exterior = 'exterior',
  interior = 'interior',
  houseDetails = 'houseDetails',
  pines = 'pines',
  groundGrassDetails = 'groundGrassDetails',
  plants = 'plants',
  supplies = 'supplies',
}

export enum SpritesheetKey {
export enum LayerKey {
  Path = 'path',
  Road = 'road',
  GrassTerrain = 'grassTerrain',
  Grass = 'grass',
  Forest = 'forest',
  StoneCircleBelowPlayer = 'stoneCircleBelowPlayer',
  StoneCircleAbovePlayer = 'stoneCircleAbovePlayer',
  StoneCircleStumpBelowPlayer = 'stoneCircleStumpBelowPlayer',
  StoneCircleStumpAbovePlayer = 'stoneCircleStumpAbovePlayer',
  Mushrooms = 'mushrooms',
  FlowerField = 'flowerField',
  GardenDirt = 'gardenDirt',
  GardenPlants = 'gardenPlants',
  WellBelowPlayer = 'wellBelowPlayer',
  WellAbovePlayer = 'wellAbovePlayer',
  Fence = 'fence',
  Tiles = 'tiles',
  House = 'house',
  DecorationNonCollidingBelowPlayer = 'decorationNonCollidingBelowPlayer',
  DecorationNonCollidingAbovePlayer = 'decorationNonCollidingAbovePlayer',
  DecorationColliding = 'decorationColliding',
  Roof = 'roof',
  NatureDecorations = 'natureDecorations',
  MapEdgeGrass = 'mapEdgeGrass',
  Animals = 'animals',
  AreaMarker = 'areaMarker',
  MailboxBelowPlayer = 'mailboxBelowPlayer',
  MailboxAbovePlayer = 'mailboxAbovePlayer',
}

export const KEY = {
  map: 'map',
  audio: {
    backgroundMusic: 'backgroundMusic',
    hey: 'hey',
  },
  area: {
    house: 'house',
    well: 'well',
    mushroom: 'mushroom',
    flowers: 'flowers',
    stones: 'stones',
    mailbox: 'mailbox',
    country: 'country',
  },
  text: {
    prompt: 'prompt',
  },
  button: {
    muteMusic: 'muteMusic',
    muteSounds: 'muteSounds',
    restart: 'restart',
  },
} as const;
