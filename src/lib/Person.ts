import { GameObject } from "./GameObject";

export class Person extends GameObject {
  public movingProgressRemaining: number

  public directionUpdate: {
    [K in Directions]: [Axis, number]
  }

  constructor(config: GameObjectProps) {
    super(config)
    this.movingProgressRemaining = 32

    this.directionUpdate = {
      'up': ['y', -1],
      'down': ['y', 1],
      'left': ['x', -1],
      'right': ['x', 1]
    }
  }

  public update(): void {
    this.updatePosition()
  }

  public updatePosition(): void {
    if (this.movingProgressRemaining > 0) {
      const [prop, change] = this.directionUpdate[this.direction]
      this[prop] += change

      this.movingProgressRemaining -= 1
    }
  }
}