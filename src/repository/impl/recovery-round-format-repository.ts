import { API } from "aws-amplify";
import { RoundFormat } from "../../domain/entities/round-format";
import { getRoundFormat } from "../../graphql/queries";
import { RecoveryRoundFormatResponse } from "../models/response/recovery-round-format-response";
import { IRecoveryRoundFormatRepository } from "../recovery-round-format-repository";

export class RecoveryRoundFormatRepository implements IRecoveryRoundFormatRepository {
  
  async execute(roundFormatID: string): Promise<RoundFormat> {

    const response: any = await API.graphql({
      query: getRoundFormat,
      variables: {
        id: roundFormatID,
      },
    });
    return new RecoveryRoundFormatResponse(response).translate();
  }

}