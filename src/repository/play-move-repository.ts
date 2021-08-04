import { Room } from "../domain/entities/room";

export interface IPlayMoveRepository {
  execute(roomID: string, move: number, userID: string) : Promise<Room>;
}