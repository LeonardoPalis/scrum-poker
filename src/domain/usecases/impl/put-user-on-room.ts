import { IPutUserOnRoomRepository } from "../../../repository/put-user-on-room";
import { Room } from "../../entities/room";
import { IPutUserOnRoom } from "../put-user-on-room";

export class PutUserOnRoomUsecase implements IPutUserOnRoom {

  constructor(
    private readonly putUserOnRoomRepository: IPutUserOnRoomRepository
  ) {}

  get roomID() {
    return window.location.pathname.split("/")[2];
  }

  async execute(username: string, userID: string): Promise<Room> {
    const createdRoom: Room = await this.putUserOnRoomRepository.execute(this.roomID, username, userID);
    return createdRoom;
  }

}