import { GameObject } from "./GameObject";

interface OverworldMapProps {
  gameObjects: {
    [key: string]: GameObject
  }
  lowerSrc: string
  upperSrc: string
}

export class OverworldMap {
  public gameObjects: {
    [key: string]: GameObject
  }
  public lowerImage?: HTMLImageElement
  public upperImage?: HTMLImageElement

  constructor(config: OverworldMapProps) {
    this.gameObjects = config.gameObjects

    this.lowerImage = new Image()
    this.upperImage = new Image()

    this.lowerImage.src = config.lowerSrc ?? null
    this.upperImage.src = config.lowerSrc ?? null
  }

  drawLowerImage(ctx: CanvasRenderingContext2D | null) {
    if (this.lowerImage.src) {
      ctx?.drawImage(this.lowerImage, 0, 0)
    }
  }

  drawUpperImage(ctx: CanvasRenderingContext2D | null) {
    if (this.upperImage.src) {
      ctx?.drawImage(this.upperImage, 0, 0)
    }
  }
}