import { RoundFormat } from "../entities/round-format";

export interface IRecoveryRoundFormat {
  execute(roundFormatID: string) : Promise<RoundFormat>;
}