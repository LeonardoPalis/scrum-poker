import { Room } from "../entities/room";

export interface IDeleteMovesOnRoom {
  execute() : Promise<Room>;
}