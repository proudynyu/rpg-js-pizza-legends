type Directions = 'down' | 'up' | 'left' | 'right'

type Axis = 'x' | 'y'

interface GameObjectProps {
  x: number
  y: number
  src?: string
  direction?: Directions
  isPlayer?: boolean
}

interface UpdateState {
  arrow: Directions
}