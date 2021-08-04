import { IRecoveryRoomRepository } from "../../../repository/recovery-room-repository";
import { Room } from "../../entities/room";
import { IRecoveryRoom } from "../recovery-room-usecase";

export class RecoveryRoomUsecase implements IRecoveryRoom {

  constructor(
    private readonly recoveryRoomRepository: IRecoveryRoomRepository
  ) {}

  get roomID() {
    return window.location.pathname.split("/")[2];
  }

  async execute(): Promise<Room> {
    const createdRoom: Room = await this.recoveryRoomRepository.execute(this.roomID);
    return createdRoom;
  }
}