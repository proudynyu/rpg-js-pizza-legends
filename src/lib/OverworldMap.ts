import { GameObject } from "./GameObject";

interface OverworldMapProps {
  gameObject: {
    [key: string]: GameObject
  }
  lowerSrc: string
  upperSrc: string
}

export class OverworldMap {
  public gameObject: {
    [key: string]: GameObject
  }
  public lowerImage: HTMLImageElement
  public upperImage: HTMLImageElement

  constructor(config: OverworldMapProps) {
    this.gameObject = config.gameObject

    this.lowerImage = new Image()
    this.lowerImage.src = config.lowerSrc
    this.upperImage.src = config.upperSrc
  }

  drawLowerImage(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.lowerImage, 0, 0)
  }

  drawUpperImage(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.upperImage, 0, 0)
  }
}

window.OverworldMaps = {
  DemoRoom: {
    lowerSrc: "assets/maps/DemoLower.png",
    upperSrc: "assets/maps/DemoUpper.png",
    gameObject: {
      hero: new GameObject({
        x: 5,
        y: 6,
      }),
      npc1: new GameObject({
        x: 7,
        y: 8,
        src: 'assets/characters/people/npc1.png'
      })
    }
  },
  Kitchen: {
    lowerSrc: "assets/maps/KitchenLower.png",
    upperSrc: "assets/maps/KitchenUpper.png",
    gameObject: {
      hero: new GameObject({
        x: 3,
        y: 1,
      }),
      npc1: new GameObject({
        x: 7,
        y: 8,
        src: 'assets/characters/people/npc2.png'
      }),
      npc2: new GameObject({
        x: 4,
        y: 5,
        src: 'assets/characters/people/npc3.png'
      })
    }
  }
}