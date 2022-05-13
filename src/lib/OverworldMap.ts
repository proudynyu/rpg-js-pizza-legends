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
  public lowerImage: HTMLImageElement
  public upperImage: HTMLImageElement

  public lowerImageLoaded: boolean
  public upperImageLoaded: boolean

  constructor(config: OverworldMapProps) {
    this.gameObjects = config.gameObjects

    this.lowerImageLoaded = false
    this.upperImageLoaded = false

    this.lowerImage = new Image()
    this.lowerImage.src = config.lowerSrc
    this.lowerImage.onload = () => {
      this.lowerImageLoaded = true
    }

    this.upperImage = new Image()
    this.upperImage.src = config.upperSrc
    this.upperImage.onload = () => {
      this.upperImageLoaded = true
    }
  }

  drawLowerImage(ctx: CanvasRenderingContext2D) {
    this.lowerImageLoaded && ctx.drawImage(this.lowerImage, 0, 0)
  }

  drawUpperImage(ctx: CanvasRenderingContext2D) {
    this.upperImageLoaded && ctx.drawImage(this.upperImage, 0, 0)
  }
}