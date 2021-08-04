import { Room } from "../../../domain/entities/room"

export class PutMoveOnRoomResponse {

  constructor (
    private readonly response: any,
  ) {}

  translate() : Room {
    return {
      id: this.response?.data?.putMoveOnRoom?.id,
      name: this.response?.data?.putMoveOnRoom?.name,
      onlineUsers: this.response?.data?.putMoveOnRoom?.onlineUsers,
      rounds: this.response?.data?.putMoveOnRoom?.rounds,
    } as Room
  }
}
