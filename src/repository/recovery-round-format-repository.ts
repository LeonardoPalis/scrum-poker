import { RoundFormat } from "../domain/entities/round-format";

export interface IRecoveryRoundFormatRepository {
  execute(roundFormatID: string) : Promise<RoundFormat>;
}