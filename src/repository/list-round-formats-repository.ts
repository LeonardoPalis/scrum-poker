import { RoundFormat } from "../domain/entities/round-format";

export interface IListRoundFormatsRepository {
  execute() : Promise<RoundFormat[]>;
}