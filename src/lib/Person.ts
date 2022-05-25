import { Idles } from "./@types/sprite";
import { GameObject } from "./GameObject";
import { equals } from "./utils";

export class Person extends GameObject {
  public movingProgressRemaining: number
  public isPlayer: boolean
  public directionUpdate: Record<Directions, [Axis, number]>

  constructor(config: GameObjectProps) {
    super(config)
    this.movingProgressRemaining = 0

    this.directionUpdate = {
      'up': ['y', -1],
      'down': ['y', 1],
      'left': ['x', -1],
      'right': ['x', 1]
    }

    this.isPlayer = config.isPlayer || false
  }

  public update(state: UpdateState): void {
    this.updatePosition()
    this.updateSprite(state)

    if (equals(this.movingProgressRemaining, 0) && state.arrow && this.isPlayer) {
      this.direction = state.arrow
      this.movingProgressRemaining = 16
    }
  }

  public updatePosition(): void {
    if (this.movingProgressRemaining > 0) {
      const [prop, change] = this.directionUpdate[this.direction]
      this[prop] += change

      this.movingProgressRemaining -= 1
    }
  }

  public updateSprite(state: UpdateState) {
    if (equals(this.movingProgressRemaining, 0) && !state.arrow && this.isPlayer) {
      this.switchSprite('idle', this.direction)
    }

    if (this.movingProgressRemaining > 0) {
      this.switchSprite('walk', this.direction)
    }

  }

  private switchSprite(movement: 'walk' | 'idle', directions: Directions) {
    const sprite = (movement + '-' + directions) as Idles
    this.sprite.setAnimation(sprite)
  }
}