import { Directions, GameObjectProps, UpdateState } from './@types/game-object'
import { Sprite } from './Sprite'

export class GameObject {
  public x: number = 0
  public y: number = 0
  public sprite: Sprite
  public direction: Directions

  constructor(config: GameObjectProps) {
    this.x = config.x
    this.y = config.y
    this.direction = config.direction || 'down'
    this.sprite = new Sprite({
      gameObject: this,
      src: config?.src
    })
  }

  public update(state: UpdateState): void {

  }
}