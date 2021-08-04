import { IDeleteMovesOnRoom } from "../../domain/usecases/delete-moves-on-room-usecase";
import { DeleteMovesOnRoomUsecase } from "../../domain/usecases/impl/delete-moves-on-room-usecase-impl";
import { IDeleteMovesOnRoomRepository } from "../../repository/delete-moves-on-room-repository";
import { DeleteMovesOnRoomRepository } from "../../repository/impl/delete-moves-on-room-repository";

export function deleteMovesOnRoomFactory(): IDeleteMovesOnRoom {
  const deleteMovesOnRoomRepository: IDeleteMovesOnRoomRepository =
    new DeleteMovesOnRoomRepository();
  const deleteMovesOnRoom: IDeleteMovesOnRoom = new DeleteMovesOnRoomUsecase(
    deleteMovesOnRoomRepository
  );
  return deleteMovesOnRoom;
}
