import { OverworldProps } from './@types/overworld'
import { maps } from './maps'
import { OverworldMap } from './OverworldMap'
import { DirectionInput } from './DirectionInput'

export class Overworld {
  public containerElement: Element
  public canvas: HTMLCanvasElement
  public ctx: CanvasRenderingContext2D
  public map: OverworldMap | null
  public directionInput: DirectionInput | null

  constructor(config: OverworldProps) {
    this.containerElement = config.containerElement
    this.canvas = this.containerElement.querySelector('.game-canvas')
    this.ctx = this.canvas.getContext('2d')
    this.map = null
    this.directionInput = null
  }

  step(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    const cameraPerson = this.map.gameObjects.hero

    Object
      .values(this.map.gameObjects)
      .forEach((gameObject) => {
        gameObject.update({
          arrow: this.directionInput.direction,
          map: this.map
        })
      })

    this.map.drawLowerImage(this.ctx, cameraPerson)

    Object
      .values(this.map.gameObjects)
      .forEach((gameObject) => {
        gameObject.sprite.draw(
          this.ctx,
          cameraPerson
        )
      })

    this.map.drawUpperImage(this.ctx, cameraPerson)

    requestAnimationFrame(() => {
      this.step()
    })
  }

  startGameLoop(): void {
    this.step()
  }

  init(): void {
    this.map = new OverworldMap(maps.DemoRoom)

    this.map.mountObjects()

    this.directionInput = new DirectionInput()
    this.directionInput.init()

    this.startGameLoop()
  }
}