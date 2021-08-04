import { Room } from "../../domain/entities/room";
import { PutUserOnRoomListenerUsecase } from "../../domain/usecases/impl/put-user-on-room-listener-usecase";
import { IPutUserOnRoomListener } from "../../domain/usecases/put-user-on-room-listener-usecase";
import { PutUserOnRoomListenerRepository } from "../../repository/impl/put-user-on-room-listener-impl";
import { IPutUserOnRoomListenerRepository } from "../../repository/put-user-on-room-listener-repository";

export function putUserOnRoomListenerFactory(): IPutUserOnRoomListener {
  const putUserOnRoomListenerRepository: IPutUserOnRoomListenerRepository<Room> =
    new PutUserOnRoomListenerRepository();
  const putUserOnRoomListener: IPutUserOnRoomListener = new PutUserOnRoomListenerUsecase(
    putUserOnRoomListenerRepository
  );
  return putUserOnRoomListener;
}
