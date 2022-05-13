import { GameObject } from './GameObject'

interface SpriteProps {
  src?: string
  animations?: {
    idleDown: any
  }
  currentAnimation?: string
  currentAnimationFrame?: number
  gameObject: GameObject
}

export class Sprite {
  public character: HTMLImageElement
  public isCharacterLoaded: boolean
  public shadow: HTMLImageElement
  public useShadow: boolean
  public isShadowLoaded: boolean
  public animation: {}
  public currentAnimation: string
  public currentAnimationFrame: number
  public gameObject: GameObject

  constructor(config: SpriteProps) {
    this.isCharacterLoaded = false
    this.isShadowLoaded = false

    this.character = new Image()
    this.character.src = config.src || '/images/characters/people/hero.png'
    this.character.onload = () => {
      this.isCharacterLoaded = true
    }

    this.shadow = new Image()
    this.shadow.src = "/images/characters/shadow.png"
    this.shadow.onload = () => {
      this.isShadowLoaded = true
    }

    this.animation = config.animations || {
      idleDown: [
        [0, 0]
      ]
    }

    this.currentAnimation = config.currentAnimation || "idleDown"
    this.currentAnimationFrame = 0

    this.gameObject = config.gameObject
  }

  draw(ctx: CanvasRenderingContext2D) {
    const x = this.gameObject.x * 16 - 8
    const y = this.gameObject.y * 16 - 18

    this.isShadowLoaded &&
      ctx.drawImage(
        this.shadow,
        x, y
      )

    this.isCharacterLoaded &&
      ctx.drawImage(
        this.character,
        0, 0,
        32, 32,
        x, y,
        32, 32
      )
  }

}