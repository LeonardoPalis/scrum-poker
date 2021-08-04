import { ICreateRoom } from "../../domain/usecases/create-room-usecase";
import { CreateRoomUsecase } from "../../domain/usecases/impl/create-room-usecase";
import { ICreateRoomRepository } from "../../repository/create-room-repository";
import { CreateRoomRepository } from "../../repository/impl/create-room-repository-impl";

export function createRoomFactory(): ICreateRoom {
  const createRoomRepository: ICreateRoomRepository = new CreateRoomRepository();
  const createRoomUsecase: ICreateRoom = new CreateRoomUsecase(createRoomRepository);
  return createRoomUsecase;
}