import { Room } from "../../../domain/entities/room";
import { RecoveryRoomUsecase } from "../../../domain/usecases/impl/recovery-room-usecase-impl";
import { IRecoveryRoom } from "../../../domain/usecases/recovery-room-usecase";
import { ICreateRoomRepository } from "../../../repository/create-room-repository";
import { IRecoveryRoomRepository } from "../../../repository/recovery-room-repository";

const roomID: string = "5885ac45-854a-4ba9-ab8b-935380b81ca8";
const roomName: string = "test mock";

const createdRoomResponse: Room = {
  id: roomID,
  name: roomName,
}

class RecoveryRoomRepositorySpy implements ICreateRoomRepository {
  execute(roomName: string): Promise<Room> {
    return Promise.resolve(createdRoomResponse);
  }
}
describe('<Recovery Room Usecase>', () => {
  it("Should receive room from repository", async ()=> {
    const recoveryRoomRepository: IRecoveryRoomRepository = new RecoveryRoomRepositorySpy();
    const recoveryRoomUsecase: IRecoveryRoom = new RecoveryRoomUsecase(recoveryRoomRepository);
    const createdRoom: Room = await recoveryRoomUsecase.execute();
    expect(createdRoom).toEqual(createdRoomResponse);
  });

})