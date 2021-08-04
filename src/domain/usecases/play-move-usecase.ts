import { Room } from "../entities/room";

export interface IPlayMoveUsecase {
  execute(move: number) : Promise<Room>;
}