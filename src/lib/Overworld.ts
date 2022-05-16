import { OverworldProps } from './@types/overworld'
import { maps } from './maps'
import { OverworldMap } from './OverworldMap'

export class Overworld {
  public containerElement: Element
  public canvas: HTMLCanvasElement
  public ctx: CanvasRenderingContext2D
  public map: OverworldMap | null

  constructor(config: OverworldProps) {
    this.containerElement = config.containerElement
    this.canvas = this.containerElement.querySelector('.game-canvas')
    this.ctx = this.canvas.getContext('2d')
    this.map = null
  }

  step(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    this.map.drawLowerImage(this.ctx)

    Object
      .values(this.map.gameObjects)
      .forEach((gameObject) => {
        gameObject.update()
        gameObject.sprite.draw(
          this.ctx
        )
      })

    this.map.drawUpperImage(this.ctx)

    requestAnimationFrame(() => {
      this.step()
    })
  }

  startGameLoop(): void {
    this.step()
  }

  init(): void {
    this.map = new OverworldMap(maps.DemoRoom)
    this.startGameLoop()
  }
}