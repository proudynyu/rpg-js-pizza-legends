import { maps } from './maps'
import { OverworldMap } from './OverworldMap'

interface OverworldProps {
  containerElement?: Element
}

export class Overworld {
  public containerElement?: Element
  public canvas?: HTMLCanvasElement
  public ctx?: CanvasRenderingContext2D
  public map?: OverworldMap

  constructor(config: OverworldProps) {
    this.containerElement = config.containerElement
    this.canvas = this.containerElement?.querySelector('.game-canvas') ?? null
    this.ctx = this.canvas?.getContext('2d') ?? null
    this.map = null
  }

  startGameLoop() {
    const step = () => {

      this.map.drawLowerImage(this.ctx)

      Object
        .values(this.map.gameObjects)
        .forEach((gameObject) => {
          gameObject.sprite.draw(
            this.ctx
          )
        })

      this.map.drawUpperImage(this.ctx)

    }

    requestAnimationFrame(() => {
      step()
    })

    step()
  }

  init() {
    this.map = new OverworldMap(maps.DemoRoom)
    this.startGameLoop()
  }
}