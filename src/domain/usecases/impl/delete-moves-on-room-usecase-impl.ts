import { IDeleteMovesOnRoomRepository } from "../../../repository/delete-moves-on-room-repository";
import { Room } from "../../entities/room";
import { IDeleteMovesOnRoom } from "../delete-moves-on-room-usecase";

export class DeleteMovesOnRoomUsecase implements IDeleteMovesOnRoom {

  constructor(
    private readonly deleteMovesOnRoomRepository: IDeleteMovesOnRoomRepository
  ) {}

  get roomID() {
    return window.location.pathname.split("/")[2];
  }

  async execute(): Promise<Room> {
    const deletedMoves: Room = await this.deleteMovesOnRoomRepository.execute(this.roomID);
    return deletedMoves;
  }
}