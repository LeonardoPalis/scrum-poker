import { Room } from "../entities/room";

export interface IPlayMoveListenerUsecase {
  execute(callback: (room: Room) => void) : Promise<void>;
}