import { GameObject } from './GameObject'

interface SpriteProps {
  src?: string
  animations?: {
    idleDown: any
  }
  currentAnimation?: string
  currentAnimationFrame?: number
  gameObject?: GameObject
}

export class Sprite {
  public image: HTMLImageElement
  public isLoaded: boolean
  public shadow: HTMLImageElement
  public isShadowLoaded: boolean
  public useShadow: boolean
  public animation: {}
  public currentAnimation: string
  public currentAnimationFrame: number
  public gameObject: GameObject

  constructor(config: SpriteProps) {
    this.isLoaded = false
    this.isShadowLoaded = false

    this.image = new Image()
    this.image.src = config.src ?? 'assets/characters/people/hero.png'
    this.image.onload = () => {
      this.isLoaded = true
    }

    this.shadow = new Image()
    this.useShadow = true
    if (this.useShadow) {
      this.shadow.src = "assets/characters/shadow.png"
    }
    this.shadow.onload = () => {
      this.isShadowLoaded = true
    }

    this.animation = config.animations ?? {
      idleDown: [
        [0, 0]
      ]
    }
    this.currentAnimation = config.currentAnimation ?? "idleDown"
    this.currentAnimationFrame = 0

    this.gameObject = config.gameObject
  }

  draw(ctx: CanvasRenderingContext2D) {
    const x = this.gameObject.x * 16 - 8
    const y = this.gameObject.y * 16 - 18

    this.isShadowLoaded && ctx?.drawImage(
      this.shadow,
      x, y
    )

    this.isLoaded && ctx?.drawImage(
      this.image,
      0, 0,
      32, 32,
      x, y,
      32, 32
    )
  }
}