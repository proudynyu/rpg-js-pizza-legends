function main() {
  const config = {
    element: document.querySelector('.game-container'),
  }
  
  const overworld = new Overworld(config)

  overworld.init()
}

main()