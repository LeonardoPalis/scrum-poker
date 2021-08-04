import { API } from "aws-amplify";
import { Room } from "../../domain/entities/room";
import { onPutUserOnRoom } from "../../graphql/subscriptions";
import { PutUserOnRoomListenerResponse } from "../models/response/put-user-on-room-listener-response";
import { IPutUserOnRoomListenerRepository } from "../put-user-on-room-listener-repository";

export class PutUserOnRoomListenerRepository
  implements IPutUserOnRoomListenerRepository<Room>
{
  async execute(
    roomID: string,
    callback: (element: Room) => void
  ): Promise<void> {
    (
      API.graphql({
        query: onPutUserOnRoom,
        variables: {
          id: roomID,
        },
      }) as any
    ).subscribe({
      next: async ({ value }: any) => {
        const room: Room = new PutUserOnRoomListenerResponse(value).translate();
        callback(room);
      },
    });
  }
}
