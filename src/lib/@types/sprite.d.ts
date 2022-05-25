import { GameObject } from '../GameObject'

type Idles = 
  'idle-down' | 
  'idle-up'   | 
  'idle-left' | 
  'idle-right'|
  'walk-down' |
  'walk-left' |
  'walk-right' |
  'walk-up' 

interface SpriteProps {
  src?: string
  animations?: Record<Partial<Idles>, number[][]>
  currentAnimation?: Idles
  currentAnimationFrame?: number
  gameObject: GameObject
  animationFrameLimit?: number
}