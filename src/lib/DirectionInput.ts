import { Directions } from "./@types/game-object"
import { equals } from "./utils"

export class DirectionInput {
  public heldDirections: Directions[]
  public map: Record<string, Partial<Directions>>

  constructor() {
    this.heldDirections = []

    this.map = {
      'KeyD': 'right',
      'KeyA': 'left',
      'KeyS': 'down',
      'KeyW': 'up',
      'ArrowRight': 'right',
      'ArrowLeft': 'left',
      'ArrowDown': 'down',
      'ArrowUp': 'up'
    }
  }

  public get direction() {
    return this.heldDirections[0]
  }

  public init() {
    document.addEventListener('keydown', e => {
      const dir = this.map[e.code]
      const index = this.heldDirections.indexOf(dir)

      if (dir && equals(index, -1)) {
        this.heldDirections.unshift(dir)
      }
    })

    document.addEventListener('keyup', e => {
      const dir = this.map[e.code]

      const index = this.heldDirections.indexOf(dir)

      if (index > -1) {
        this.heldDirections.splice(index, 1)
      }
    })
  }
}