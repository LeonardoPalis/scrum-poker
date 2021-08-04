import { IRecoveryRoundFormatRepository } from "../../../repository/recovery-round-format-repository";
import { RoundFormat } from "../../entities/round-format";
import { IRecoveryRoundFormat } from "../recovery-round-format-usecase";

export class RecoveryRoundFormatUsecase implements IRecoveryRoundFormat {

  constructor(
    private readonly recoveryRoundFormatRepository: IRecoveryRoundFormatRepository
  ) {}

  async execute(roundFormat: string): Promise<RoundFormat> {
    const recoveredRoundFormat: RoundFormat = await this.recoveryRoundFormatRepository.execute(roundFormat);
    return recoveredRoundFormat;
  }
}