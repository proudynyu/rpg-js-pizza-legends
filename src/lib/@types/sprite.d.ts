import { GameObject } from '../GameObject'

interface SpriteProps {
  src?: string
  animations?: {
    idleDown: any
  }
  currentAnimation?: string
  currentAnimationFrame?: number
  gameObject: GameObject
}