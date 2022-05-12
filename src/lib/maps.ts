import { GameObject } from "./GameObject";

export const maps = {
  DemoRoom: {
    lowerSrc: "/images/maps/DemoLower.png",
    upperSrc: "/images/maps/DemoUpper.png",
    gameObjects: {
      hero: new GameObject({
        x: 5,
        y: 6,
      }),
      npc1: new GameObject({
        x: 7,
        y: 8,
        src: "/images/characters/people/npc1.png"
      })
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