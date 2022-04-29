import { GameObject } from '.'

interface OverworldProps {
  containerElement: Element | null
}

export class Overworld {
  public containerElement: Element | null
  public canvas: HTMLCanvasElement | null
  public ctx: CanvasRenderingContext2D | null

  constructor(config: OverworldProps) {
    this.containerElement = config.containerElement
    this.canvas = this.containerElement?.querySelector('.game-canvas') ?? null
    this.ctx = this.canvas?.getContext('2d') ?? null
  }

  init() {
    const image = new Image()
    image.onload = () => {
      this.ctx?.drawImage(image, 0, 0)
    }
    image.src = 'assets/maps/DemoLower.png'

    const hero = new GameObject({
      x: 5,
      y: 6
    })
    const npc1 = new GameObject({
      x: 7,
      y: 8,
      src: 'assets/characters/people/npc1.png'
    })


    setTimeout(() => {
      hero.sprite.draw(this.ctx)
      npc1.sprite.draw(this.ctx)
    }, 200)

  }
}