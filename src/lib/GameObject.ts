import {
  BehaviorLoop,
  Directions,
  GameObjectProps,
  UpdateState,
} from "./@types/game-object";
import { OverworldEvent } from "./OverworldEvent";
import { OverworldMap } from "./OverworldMap";
import { Sprite } from "./Sprite";
import { equals } from "./utils";

export class GameObject {
  public id: string | null;
  public x: number = 0;
  public y: number = 0;
  public sprite: Sprite;
  public direction: Directions;
  public isMounted: boolean;
  public behaviorLoop: Array<BehaviorLoop>;
  public behaviorLoopIndex: number;

  constructor(config: GameObjectProps) {
    this.id = null;
    this.behaviorLoop = config.behaviorLoop || [];
    this.behaviorLoopIndex = 0;

    this.isMounted = false;
    this.x = config.x;
    this.y = config.y;
    this.direction = config.direction || "down";
    this.sprite = new Sprite({
      gameObject: this,
      src: config?.src,
    });
  }

  public update(state: UpdateState): void {}

  public async activateBehaviorEvent(map: OverworldMap) {

    if (map.isCutscenePlaying || !this.behaviorLoop.length) {
      return
    }

    let eventConfig = this.behaviorLoop[this.behaviorLoopIndex];

    eventConfig.who = this.id;

    const eventHandler = new OverworldEvent({
      map,
      event: eventConfig,
    });

    await eventHandler.init();

    this.behaviorLoopIndex += 1;

    if (equals(this.behaviorLoopIndex, this.behaviorLoop.length)) {
      this.behaviorLoopIndex = 0;
    }

    this.activateBehaviorEvent(map);
  }

  public mount(map: OverworldMap) {
    this.isMounted = true;
    map.addWall(this.x, this.y);

    setTimeout(() => {
      this.activateBehaviorEvent(map);
    }, 10);
  }
}
