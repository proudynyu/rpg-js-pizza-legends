import { BehaviorLoop } from "./@types/game-object";
import { OverworldMap } from "./OverworldMap";

interface ConfigProps {
  map: OverworldMap
  event: BehaviorLoop
}

export class OverworldEvent {
  public map: OverworldMap
  public event: BehaviorLoop
  
  constructor(config: ConfigProps) {
    this.map = config.map
    this.event = config.event
  }

  public init() {
    return new Promise(resolve => {
      this[this.event.type](resolve)
    })
  }

  public stand(resolve: (value: unknown) => void) {
    const who = this.map.gameObjects[ this.event.who ]

    who.startBehavior({
      map: this.map
    }, {
      type: 'stand',
      direction: this.event.direction
    })
  }

  public walk(resolve: (value: unknown) => void) {
    const who = this.map.gameObjects[ this.event.who ]

    who.startBehavior({
      map: this.map
    }, {
      type: 'walk',
      direction: this.event.direction
    })
  }
}