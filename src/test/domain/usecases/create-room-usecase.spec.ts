import { Room } from "../../../domain/entities/room";
import { ICreateRoom } from "../../../domain/usecases/create-room-usecase";
import { CreateRoomUsecase } from "../../../domain/usecases/impl/create-room-usecase";
import { ICreateRoomRepository } from "../../../repository/create-room-repository";

const roomNameRequest: string = "test mock";
const roundFormatID: string = "test mock";

const createdRoomResponse: Room = {
  name: roomNameRequest
}

class CreateRoomRepositorySpy implements ICreateRoomRepository {
  execute(roomName: string): Promise<Room> {
    return Promise.resolve(createdRoomResponse);
  }
}
describe('<Create Room Usecase>', () => {
  it("Should receive room from repository", async ()=> {
    const createRoomRepositorySpy: CreateRoomRepositorySpy = new CreateRoomRepositorySpy();
    const createRoomUsecase: ICreateRoom = new CreateRoomUsecase(createRoomRepositorySpy);
    const createdRoom: Room = await createRoomUsecase.execute(roomNameRequest, roundFormatID);
    expect(createdRoom).toEqual(createdRoomResponse);
  });

})