class Overworld {
  constructor(config) {
    this.element = config.element
    this.canvas = this.element.querySelector('.game-canvas')
    this.ctx = this.canvas.getContext('2d')
  }

  init() {
    const image = new Image()
    image.onload = () => {
      this.ctx.drawImage(image, 0, 0)
    }
    image.src = 'src/assets/maps/DemoLower.png'

    const heroVector = {
      x: 5,
      y: 6
    }

    const heroShadow = new Image()
    heroShadow.onload = () => {
      this.ctx.drawImage(heroShadow, heroVector.x * 16 - 8, heroVector.y * 16 - 18)
    }
    heroShadow.src = 'src/assets/characters/shadow.png'

    const hero = new Image()
    hero.onload = () => {
      this.ctx.drawImage(hero, 0, 0, 32, 32, heroVector.x * 16 - 8, heroVector.y * 16 - 18, 32, 32)
    }
    hero.src = 'src/assets/characters/people/hero.png'
  }
}