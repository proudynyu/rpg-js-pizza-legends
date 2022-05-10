import { GameObject } from "./GameObject";

export const maps = {
  DemoRoom: {
    lowerSrc: "assets/maps/DemoLower.png",
    upperSrc: "assets/maps/DemoUpper.png",
    gameObjects: {
      hero: new GameObject({
        x: 5,
        y: 6,
      }),
      npc1: new GameObject({
        x: 7,
        y: 8,
        src: "assets/characters/people/npc1.png"
      })
    }
  },
  Kitchen: {
    lowerSrc: "assets/maps/KitchenLower.png",
    upperSrc: "assets/maps/KitchenUpper.png",
    gameObjects: {
      hero: new GameObject({
        x: 3,
        y: 1,
      }),
      npc1: new GameObject({
        x: 7,
        y: 8,
        src: "assets/characters/people/npc2.png"
      }),
      npc2: new GameObject({
        x: 4,
        y: 5,
        src: "assets/characters/people/npc3.png"
      })
    }
  }
}