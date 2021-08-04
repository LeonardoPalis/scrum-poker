import { API, graphqlOperation } from "aws-amplify";
import { Room } from "../../domain/entities/room";
import { putUserOnRoom } from "../../graphql/mutations";
import { PutUserOnRoomResponse } from "../models/response/put-user-on-room-response";
import { IPutUserOnRoomRepository } from "../put-user-on-room";

export class PutUserOnRoomRepository implements IPutUserOnRoomRepository {

  async execute(roomID: string, userName: string, userID: string): Promise<Room> {
    const response: any = await API.graphql(
      graphqlOperation(putUserOnRoom, {
        input: {
          id: roomID,
          userName,
          userID,
        },
      })
    );

    return new PutUserOnRoomResponse(response).translate();
  }
}
