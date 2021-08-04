import { ICreateRoomRepository } from "../../../repository/create-room-repository";
import { Room } from "../../entities/room";
import { ICreateRoom } from "../create-room-usecase";

export class CreateRoomUsecase implements ICreateRoom {

  constructor(
    private readonly createRoomRepository: ICreateRoomRepository
  ) {}

  async execute(roomName: string, roundFormatID: string): Promise<Room> {
    const createdRoom: Room = await this.createRoomRepository.execute(roomName, roundFormatID);
    return createdRoom;
  }

}