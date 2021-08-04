import { Room } from "../../../domain/entities/room";
import { PutUserOnRoomListenerUsecase } from "../../../domain/usecases/impl/put-user-on-room-listener-usecase";
import { IPutUserOnRoomListener } from "../../../domain/usecases/put-user-on-room-listener-usecase";
import { IPutUserOnRoomListenerRepository } from "../../../repository/put-user-on-room-listener-repository";

const roomNameRequest: string = "test mock";
const roomIDRequest: string = "5885ac45-854a-4ba9-ab8b-935380b81ca8";

const createdRoomResponse: Room = {
  name: roomNameRequest,
  id: roomIDRequest,
};

const ack = jest.fn();

class PutUserOnRoomListenerRepositorySpy
  implements IPutUserOnRoomListenerRepository<Room>
{
  execute(roomID: string, callback: (room: Room) => void): void {
    callback(createdRoomResponse);
  }
}

const handleCallbackMock = (room: Room): void => {
  ack(room);
};

const putUserOnRoomListenerFacotry = (): IPutUserOnRoomListener => {
  const putUserOnRoomListenerRepository: IPutUserOnRoomListenerRepository<Room> =
    new PutUserOnRoomListenerRepositorySpy();
  const putUserOnRoomListenerUsecase: IPutUserOnRoomListener =
    new PutUserOnRoomListenerUsecase(putUserOnRoomListenerRepository);
  return putUserOnRoomListenerUsecase;
};

describe("<Put User On Room Usecase>", () => {
  it("Should call callback one time", async () => {
    const putUserOnRoomListenerUsecase: IPutUserOnRoomListener = putUserOnRoomListenerFacotry();
    putUserOnRoomListenerUsecase.execute(handleCallbackMock);
    expect(ack).toBeCalled();
  });

  it("Should call callback multiple times", async () => {
    const putUserOnRoomListenerUsecase: IPutUserOnRoomListener = putUserOnRoomListenerFacotry();
    putUserOnRoomListenerUsecase.execute(handleCallbackMock);
    putUserOnRoomListenerUsecase.execute(handleCallbackMock);
    putUserOnRoomListenerUsecase.execute(handleCallbackMock);
    expect(ack).toHaveBeenCalledTimes(3);
  });

  it("Should call callback with corretly parameter", async () => {
    const putUserOnRoomListenerUsecase: IPutUserOnRoomListener = putUserOnRoomListenerFacotry();
    putUserOnRoomListenerUsecase.execute(handleCallbackMock);
    expect(ack).toHaveBeenCalledWith(createdRoomResponse);
  });
});
