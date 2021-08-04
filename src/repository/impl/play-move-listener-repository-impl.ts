import { API } from "aws-amplify";
import { Room } from "../../domain/entities/room";
import { onPutMoveOnRoom } from "../../graphql/subscriptions";
import { PlayMoveListenerResponse } from "../models/response/play-move-listener-response";
import { IPlayMoveListenerRepository } from "../play-move-listener-repository";

export class PlayMoveLListenerRepository
  implements IPlayMoveListenerRepository<Room>
{
  async execute(
    roomID: string,
    callback: (element: Room) => void
  ): Promise<void> {
    (
      API.graphql({
        query: onPutMoveOnRoom,
        variables: {
          id: roomID,
        },
      }) as any
    ).subscribe({
      next: async ({ value }: any) => {
        const room: Room = new PlayMoveListenerResponse(value).translate();
        callback(room);
      },
    });
  }
}
