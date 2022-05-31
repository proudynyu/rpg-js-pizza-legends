import { Directions } from "./@types/game-object";
import { OverworldMapProps } from "./@types/overworld";
import { GameObject } from "./GameObject";
import { utils } from "./utils";

export class OverworldMap {
  public gameObjects: {
    [key: string]: GameObject
  }
  public lowerImage: HTMLImageElement
  public upperImage: HTMLImageElement

  public lowerImageLoaded: boolean
  public upperImageLoaded: boolean

  public walls: {
    [key: string]: boolean
  }

  constructor(config: OverworldMapProps) {
    this.gameObjects = config.gameObjects
    this.walls = config.walls || {}

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

  public coordenates(cameraPerson: GameObject) {
    return {
      x: utils.withGrid(10.5) - cameraPerson.x,
      y: utils.withGrid(6) - cameraPerson.y
    }
  }

  drawLowerImage(ctx: CanvasRenderingContext2D, cameraPerson: GameObject): void {
    const { x, y } = this.coordenates(cameraPerson)
    this.lowerImageLoaded && ctx.drawImage(this.lowerImage, x, y)
  }

  drawUpperImage(ctx: CanvasRenderingContext2D, cameraPerson: GameObject): void {
    const { x, y } = this.coordenates(cameraPerson)
    this.upperImageLoaded && ctx.drawImage(this.upperImage, x, y)
  }

  isSpaceTaken(currentX: number, currentY: number, direction: Directions): boolean {
    const { x, y } = utils.nextPosition(currentX, currentY, direction)
    return this.walls[`${x},${y}`] || false
  }
}