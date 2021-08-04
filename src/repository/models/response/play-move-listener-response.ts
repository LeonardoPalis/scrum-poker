import { Room } from "../../../domain/entities/room"

export class PlayMoveListenerResponse {

  constructor (
    private readonly response: any,
  ) {}

  translate() : Room {
    return {
      id: this.response?.data?.onPutMoveOnRoom?.id,
      name: this.response?.data?.onPutMoveOnRoom?.name,
      onlineUsers: this.response?.data?.onPutMoveOnRoom?.onlineUsers,
      rounds: this.response?.data?.onPutMoveOnRoom?.rounds,
    } as Room
  }
}
