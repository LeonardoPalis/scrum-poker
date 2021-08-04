import { Room } from "../entities/room";

export interface IRecoveryRoom {
  execute() : Promise<Room>;
}