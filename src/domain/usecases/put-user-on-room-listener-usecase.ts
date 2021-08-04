import { Room } from "../entities/room";

export interface IPutUserOnRoomListener {
  execute(callback: (room: Room) => void) : Promise<void>;
}