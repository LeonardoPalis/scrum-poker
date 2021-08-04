import { API, graphqlOperation } from "aws-amplify";
import { Room } from "../../domain/entities/room";
import { createRoom } from "../../graphql/mutations";
import { ICreateRoomRepository } from "../create-room-repository";
import { CreateRoomResponse } from "../models/response/create-room-response";

export class CreateRoomRepository implements ICreateRoomRepository {
  
  async execute(roomName: string, roundFormatID: string): Promise<Room> {

    const response: any = await API.graphql(
      graphqlOperation(createRoom, { input: {name: roomName, roundFormatID} })
    );

    return new CreateRoomResponse(response).translate();
  }

}