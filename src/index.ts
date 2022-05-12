import { Overworld } from './lib/Overworld'

function main() {
  const overworld = new Overworld({
    containerElement: document.querySelector('.game-container')!
  })

  overworld.init()
}

main()