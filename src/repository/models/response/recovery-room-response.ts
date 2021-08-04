import { Room } from "../../../domain/entities/room"

export class RecoveryRoomResponse {

  constructor (
    private readonly response: any,
  ) {}

  translate() : Room {
    return {
      id: this.response?.data?.getRoom?.id,
      name: this.response?.data?.getRoom?.name,
      onlineUsers: this.response?.data?.getRoom?.onlineUsers,
      roundFormatID: this.response?.data?.getRoom?.roundFormatID,
      rounds: this.response?.data?.getRoom?.rounds,
    } as Room
  }
}
