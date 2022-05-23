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
}