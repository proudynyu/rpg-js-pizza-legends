import { GameObject } from '../GameObject'

interface OverworldProps {
  containerElement: Element,
}

interface OverworldMapProps {
  gameObjects: {
    [key: string]: GameObject
  }
  lowerSrc: string
  upperSrc: string
}
