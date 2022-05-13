import { Overworld } from './lib/Overworld'

(function () {
  const overworld = new Overworld({
    containerElement: document.querySelector('.game-container')!
  })

  overworld.init()
})()