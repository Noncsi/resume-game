export enum TilesetKey {
  Exterior = 'exterior',
  Interior = 'interior',
  HouseDetails = 'houseDetails',
  Pines = 'pines',
  GroundGrassDetails = 'groundGrassDetails',
  Plants = 'plants',
  Supplies = 'supplies',
}

export enum SpritesheetKey {
  ExteriorAsSheet = 'exteriorAsSheet',
  Player = 'player',
  Chimney = 'chimney',
  Cat = 'cat',
  BirdFly = 'birdFly',
  BirdJump = 'birdJump',
  Cattle = 'cattle',
}

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

export enum AudioKey {
  BackgroundMusic = 'backgroundMusic',
  Hey = 'hey',
  Footsteps = 'footsteps',
}

export const KEY = {
  map: 'map',
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
