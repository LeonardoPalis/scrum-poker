import { RecoveryRoundFormatUsecase } from "../../domain/usecases/impl/recovery-round-format-usecase-impl";
import { IRecoveryRoundFormat } from "../../domain/usecases/recovery-round-format-usecase";
import { RecoveryRoundFormatRepository } from "../../repository/impl/recovery-round-format-repository";
import { IRecoveryRoundFormatRepository } from "../../repository/recovery-round-format-repository";

export function recoveryRoundFormatFactory(): IRecoveryRoundFormat {
  const recoveryRoundFormatRepository: IRecoveryRoundFormatRepository =
    new RecoveryRoundFormatRepository();
  const recoveryRoundFormatUsecase: IRecoveryRoundFormat = new RecoveryRoundFormatUsecase(
    recoveryRoundFormatRepository
  );
  return recoveryRoundFormatUsecase;
}
