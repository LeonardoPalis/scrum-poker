import { Room } from "../domain/entities/room";

export interface IDeleteMovesOnRoomRepository {
  execute(roomID: string) : Promise<Room>;
}