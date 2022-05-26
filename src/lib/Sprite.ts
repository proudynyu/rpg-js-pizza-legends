import { Idles, SpriteProps } from './@types/sprite'
import { GameObject } from './GameObject'
import { utils } from './utils'

export class Sprite {
  public character: HTMLImageElement
  public isCharacterLoaded: boolean
  public shadow: HTMLImageElement
  public useShadow: boolean
  public isShadowLoaded: boolean
  public animation: Record<Idles, number[][]>
  public animationFrameLimit: number
  public animationFrameProgress: number
  public currentAnimation: Idles
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
      "idle-down":  [[0, 0]],
      "idle-left":  [[0, 3]],
      "idle-right": [[0, 1]],
      "idle-up":    [[0, 2]],
      "walk-up":    [[1, 2], [0, 2], [3, 2], [0, 2]],
      "walk-left":  [[1, 3], [0, 3], [3, 3], [0, 3]],
      "walk-right": [[1, 1], [0, 1], [3, 1], [0, 1]],
      "walk-down":  [[1, 0], [0, 0], [3, 0], [0, 0]]
    }

    this.currentAnimation = config.currentAnimation || "walk-down"
    this.currentAnimationFrame = 0

    this.animationFrameLimit = config.animationFrameLimit || 8
    this.animationFrameProgress = this.animationFrameLimit

    this.gameObject = config.gameObject
  }

  public get frames() {
    return this.animation[this.currentAnimation][this.currentAnimationFrame]
  }

  public setAnimation(key: Idles) {
    if (key !== this.currentAnimation) {
      this.currentAnimation = key
      this.currentAnimationFrame = 0
      this.animationFrameProgress = this.animationFrameLimit
    }
  }

  public updateAnimationProgress(): void {
    if (this.animationFrameProgress > 0) {
      this.animationFrameProgress -= 1
      return
    }

    this.animationFrameProgress = this.animationFrameLimit

    this.currentAnimationFrame += 1

    if (this.frames === undefined) {
      this.currentAnimationFrame = 0
    }
  }

  draw(ctx: CanvasRenderingContext2D, cameraPerson: GameObject): void {
    const x = this.gameObject.x - 8 + utils.withGrid(10.5) - cameraPerson.x
    const y = this.gameObject.y - 18 + utils.withGrid(6) - cameraPerson.y

    this.isShadowLoaded &&
      ctx.drawImage(
        this.shadow,
        x, y
      )

    const [frameX, frameY] = this.frames

    this.isCharacterLoaded &&
      ctx.drawImage(
        this.character,
        frameX * 32, frameY * 32,
        32, 32,
        x, y,
        32, 32
      )

    this.updateAnimationProgress()
  }

}