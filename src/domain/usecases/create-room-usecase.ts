import { Room } from "../entities/room";

export interface ICreateRoom {
  execute(roomName: string, roundFormatID: string) : Promise<Room>;
}