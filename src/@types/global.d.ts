import { GameObject } from "../lib"

declare global {
  interface Window {
    OverworldMaps: {
      [key: string]: {
        lowerSrc: string
        upperSrc: string
        gameObject: {
          [key: string]: GameObject
        }
      }
    }
  }
}