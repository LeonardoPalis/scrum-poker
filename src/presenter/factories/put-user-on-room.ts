import { PutUserOnRoomUsecase } from "../../domain/usecases/impl/put-user-on-room";
import { IPutUserOnRoom } from "../../domain/usecases/put-user-on-room";
import { PutUserOnRoomRepository } from "../../repository/impl/put-user-on-room-impl";
import { IPutUserOnRoomRepository } from "../../repository/put-user-on-room";

export function putUserOnRoomFactory(): IPutUserOnRoom {
  const putUserOnRoomRepository: IPutUserOnRoomRepository =
    new PutUserOnRoomRepository();
  const putUserOnRoom: IPutUserOnRoom = new PutUserOnRoomUsecase(
    putUserOnRoomRepository
  );
  return putUserOnRoom;
}
