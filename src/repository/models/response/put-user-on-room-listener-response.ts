import { Room } from "../../../domain/entities/room"

export class PutUserOnRoomListenerResponse {

  constructor (
    private readonly response: any,
  ) {}

  translate() : Room {
    return {
      id: this.response?.data?.onPutUserOnRoom?.id,
      name: this.response?.data?.onPutUserOnRoom?.name,
      onlineUsers: this.response?.data?.onPutUserOnRoom?.onlineUsers,
      rounds: this.response?.data?.onPutUserOnRoom?.rounds,
    } as Room
  }
}
