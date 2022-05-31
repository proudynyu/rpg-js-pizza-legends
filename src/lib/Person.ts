import { Axis, BehaviorProps, Directions, GameObjectProps, UpdateState } from "./@types/game-object";
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
    if (this.movingProgressRemaining > 0) {
      this.updatePosition()
    } else {
      if (state.arrow && this.isPlayer) {
        this.startBehavior(state, {
          type: 'walk',
          direction: state.arrow
        })
      }
      this.updateSprite()
    }
  }

  public startBehavior(state: UpdateState, options: BehaviorProps): void {
    this.direction = options.direction
    if (equals(options.type, 'walk')) {
      if (state.map.isSpaceTaken(this.x, this.y, this.direction)) {
        return
      }
      this.movingProgressRemaining = 16
    }
  }

  public updatePosition(): void {
    const [prop, change] = this.directionUpdate[this.direction]
    this[prop] += change

    this.movingProgressRemaining -= 1
  }

  public updateSprite(): void {
    if (this.movingProgressRemaining > 0) {
      this.switchSprite('walk', this.direction)
      return
    }
    this.switchSprite('idle', this.direction)
  }

  private switchSprite(movement: 'walk' | 'idle', directions: Directions): void {
    const sprite = (movement + '-' + directions) as Idles
    this.sprite.setAnimation(sprite)
  }
}