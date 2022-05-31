import { GameObject } from "./GameObject";
import { Person } from "./Person";
import { utils } from './utils'

const { withGrid } = utils

export const maps = {
  DemoRoom: {
    lowerSrc: "/images/maps/DemoLower.png",
    upperSrc: "/images/maps/DemoUpper.png",
    gameObjects: {
      hero: new Person({
        x: withGrid(5),
        y: withGrid(6),
        isPlayer: true
      }),
      npc1: new Person({
        x: withGrid(7),
        y: withGrid(8),
        src: "/images/characters/people/npc1.png"
      })
    },
    walls: {
      [utils.asGridCoords(7, 6)] : true,
      [utils.asGridCoords(8, 6)] : true,
      [utils.asGridCoords(7, 7)] : true,
      [utils.asGridCoords(8,7)] : true,
    }
  },
  Kitchen: {
    lowerSrc: "/images/maps/KitchenLower.png",
    upperSrc: "/images/maps/KitchenUpper.png",
    gameObjects: {
      hero: new GameObject({
        x: 3,
        y: 1,
      }),
      npc1: new GameObject({
        x: 7,
        y: 8,
        src: "/images/characters/people/npc2.png"
      }),
      npc2: new GameObject({
        x: 4,
        y: 5,
        src: "/images/characters/people/npc3.png"
      })
    }
  }
}
