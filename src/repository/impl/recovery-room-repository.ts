import { API } from "aws-amplify";
import { Room } from "../../domain/entities/room";
import { getRoom } from "../../graphql/queries";
import { ICreateRoomRepository } from "../create-room-repository";
import { RecoveryRoomResponse } from "../models/response/recovery-room-response";

export class RecoveryRoomRepository implements ICreateRoomRepository {
  
  async execute(roomID: string): Promise<Room> {

    const response: any = await API.graphql({
      query: getRoom,
      variables: {
        id: roomID,
      },
    });
    return new RecoveryRoomResponse(response).translate();
  }

}