import { Room } from "../../../domain/entities/room"

export class PutUserOnRoomResponse {

  constructor (
    private readonly response: any,
  ) {}

  translate() : Room {
    return {
      id: this.response?.data?.putUserOnRoom?.id,
      name: this.response?.data?.putUserOnRoom?.name,
      onlineUsers: this.response?.data?.putUserOnRoom?.onlineUsers,
      rounds: this.response?.data?.putUserOnRoom?.rounds,
    } as Room
  }
}
