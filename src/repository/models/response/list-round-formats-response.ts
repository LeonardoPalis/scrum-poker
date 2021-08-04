import { RoundFormat } from "../../../domain/entities/round-format"

export class ListRoundFormatsResponse {

  constructor (
    private readonly response: any,
  ) {}

  translate() : RoundFormat[] {
    return this.response.data.listRoundFormats.items.map((roundFormat: RoundFormat) => ({
      id: roundFormat.id,
      title: roundFormat.title,
      moves: roundFormat.moves
    }));
  }
}
