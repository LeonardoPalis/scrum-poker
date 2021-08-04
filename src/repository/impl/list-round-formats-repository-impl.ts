import { API } from "aws-amplify";
import { RoundFormat } from "../../domain/entities/round-format";
import { listRoundFormats } from "../../graphql/queries";
import { IListRoundFormatsRepository } from "../list-round-formats-repository";
import { ListRoundFormatsResponse } from "../models/response/list-round-formats-response";

export class ListRoundFormatsRepository implements IListRoundFormatsRepository {
  
  async execute(): Promise<RoundFormat[]> {
    const response: any = await API.graphql({
      query: listRoundFormats
    });
    console.log("RES", response)
    return new ListRoundFormatsResponse(response).translate();
  }

}