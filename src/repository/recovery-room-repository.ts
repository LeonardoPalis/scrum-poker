import { Room } from "../domain/entities/room";

export interface IRecoveryRoomRepository {
  execute(roomID: string) : Promise<Room>;
}