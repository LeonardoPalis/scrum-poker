import { Room } from "../domain/entities/room";

export interface IPutUserOnRoomRepository {
  execute(roomID: string, username: string, userID: string) : Promise<Room>;
}