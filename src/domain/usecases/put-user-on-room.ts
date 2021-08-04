import { Room } from "../entities/room";

export interface IPutUserOnRoom {
  execute(username: string, userID: string) : Promise<Room>;
}