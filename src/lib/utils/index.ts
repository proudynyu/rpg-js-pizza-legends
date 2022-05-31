import { Directions } from "../@types/game-object"

export const utils = {
  withGrid(n: number): number {
    return n * 16
  },
  asGridCoords(x: number, y: number): string {
    return `${x * 16},${y * 16}`
  },
  nextPosition(initalX: number, initalY: number, direction: Directions): { x: number, y: number } {
    let x = initalX
    let y = initalY

    const size = 16;

    switch (direction) {
      case 'left':
        x -= size
        break
      case 'right':
        x += size
        break
      case 'up':
        y -= size
        break
      case 'down':
        y += size
        break

      default:
        break
    }

    return {
      x, y
    }
  }
}

export const equals = (k: any, v: any): boolean => {
  return k === v
}
