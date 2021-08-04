import { Room } from "../../../domain/entities/room";
import { PutUserOnRoomUsecase } from "../../../domain/usecases/impl/put-user-on-room";
import { IPutUserOnRoom } from "../../../domain/usecases/put-user-on-room";
import { IPutUserOnRoomRepository } from "../../../repository/put-user-on-room";

const roomNameRequest: string = "test mock";
const roomIDRequest: string = "5885ac45-854a-4ba9-ab8b-935380b81ca8";

const createdRoomResponse: Room = {
  name: roomNameRequest,
  id: roomIDRequest,
}

class PutUserOnRoomRepositorySpy implements IPutUserOnRoomRepository {
  execute(roomName: string): Promise<Room> {
    return Promise.resolve(createdRoomResponse);
  }
}
describe('<Put User On Room Usecase>', () => {
  it("Should receive room from repository", async ()=> {
    const putUserOnRoomRepository: PutUserOnRoomRepositorySpy = new PutUserOnRoomRepositorySpy();
    const putUserOnRoomUsecase: IPutUserOnRoom = new PutUserOnRoomUsecase(putUserOnRoomRepository);
    const putUserOnRoom: Room = await putUserOnRoomUsecase.execute(roomNameRequest, roomIDRequest);
    expect(putUserOnRoom).toEqual(createdRoomResponse);
  });

})