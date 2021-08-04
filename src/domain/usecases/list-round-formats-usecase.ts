import { RoundFormat } from "../entities/round-format";

export interface IListRoundFormats {
  execute() : Promise<RoundFormat[]>;
}