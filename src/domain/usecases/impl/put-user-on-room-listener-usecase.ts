import { IPutUserOnRoomListenerRepository } from "../../../repository/put-user-on-room-listener-repository";
import { Room } from "../../entities/room";
import { IPutUserOnRoomListener } from "../put-user-on-room-listener-usecase";

export class PutUserOnRoomListenerUsecase implements IPutUserOnRoomListener {

  constructor(
    private readonly putUserOnRoomListenerRepository: IPutUserOnRoomListenerRepository<Room>
  ) {}

  get roomID() {
    return window.location.pathname.split("/")[2];
  }

  async execute(callback: (room: Room) => void): Promise<void> {
    this.putUserOnRoomListenerRepository.execute(this.roomID, callback);
  }

}