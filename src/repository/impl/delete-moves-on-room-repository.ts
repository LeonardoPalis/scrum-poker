import { API } from "aws-amplify";
import { Room } from "../../domain/entities/room";
import { deleteMovesOnRoom } from "../../graphql/mutations";
import { IDeleteMovesOnRoomRepository } from "../delete-moves-on-room-repository";
import { DeleteMovesOnRoomResponse } from "../models/response/delete-moves-on-room-response";

export class DeleteMovesOnRoomRepository implements IDeleteMovesOnRoomRepository {
  
  async execute(roomID: string): Promise<Room> {

    const response: any = await API.graphql({
      query: deleteMovesOnRoom,
      variables: {
        input: {
          id: roomID,
        }
      },
    });
    return new DeleteMovesOnRoomResponse(response).translate();
  }

}