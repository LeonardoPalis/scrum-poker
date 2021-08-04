import { Room } from "../../../domain/entities/room"

export class CreateRoomResponse {

  constructor (
    private readonly response: any,
  ) {}

  translate() : Room {
    return {
      id: this.response?.data?.createRoom?.id,
      name: this.response?.data?.createRoom?.name,
      roundFormatID: this.response?.data?.createRoom?.roundFormatID,
    } as Room
  }
}
