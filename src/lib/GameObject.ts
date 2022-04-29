import { Sprite } from "."

interface GameObjectProps {
  x: number
  y: number
  src?: string
}

export class GameObject {
  public x: number = 0
  public y: number = 0
  public sprite: Sprite

  constructor(config: GameObjectProps) {
    this.x = config.x || 0
    this.y = config.y || 0
    this.sprite = new Sprite({
      gameObject: this,
      src: config.src || 'assets/characters/people/hero.png'
    })
  }
}