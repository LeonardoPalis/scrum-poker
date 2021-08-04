import { Room } from "../domain/entities/room";

export interface ICreateRoomRepository {
  execute(roomName: string, roundFormatID: string) : Promise<Room>;
}