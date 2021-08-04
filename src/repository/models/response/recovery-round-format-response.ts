import { RoundFormat } from "../../../domain/entities/round-format"

export class RecoveryRoundFormatResponse {

  constructor (
    private readonly response: any,
  ) {}

  translate() : RoundFormat {
    return {
      id: this.response?.data?.getRoundFormat?.id,
      title: this.response?.data?.getRoundFormat?.title,
      moves: this.response?.data?.getRoundFormat?.moves,
    } as RoundFormat
  }
}
