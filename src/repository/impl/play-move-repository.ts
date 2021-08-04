import { API, graphqlOperation } from "aws-amplify";
import { Room } from "../../domain/entities/room";
import { putMoveOnRoom } from "../../graphql/mutations";
import { PutMoveOnRoomResponse } from "../models/response/play-move-response";
import { IPlayMoveRepository } from "../play-move-repository";

export class PlayMoveRepository implements IPlayMoveRepository {
  async execute(roomID: string, move: number, userID: string): Promise<Room> {
    const response: any = await API.graphql(
      graphqlOperation(putMoveOnRoom, {
        input: {
          id: roomID,
          move,
          userID,
        },
      })
    );

    return new PutMoveOnRoomResponse(response).translate();
  }
}
