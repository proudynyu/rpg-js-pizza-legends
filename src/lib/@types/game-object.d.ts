import { OverworldMap } from "../OverworldMap"

type Directions = 'down' | 'up' | 'left' | 'right'

type Axis = 'x' | 'y'

interface GameObjectProps {
  x: number
  y: number
  src?: string
  direction?: Directions
  isPlayer?: boolean
  behaviorLoop?: Array<BehaviorLoop>
}

interface UpdateState {
  arrow: Directions
  map: OverworldMap
}

type BehaviorTypes = 'walk' | 'stand'

interface BehaviorProps {
  type: BehaviorTypes
  direction: Directions
}

interface BehaviorLoop extends BehaviorProps {
  time?: number
  who?: string
}