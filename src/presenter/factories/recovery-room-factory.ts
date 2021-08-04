import { RecoveryRoomUsecase } from "../../domain/usecases/impl/recovery-room-usecase-impl";
import { IRecoveryRoom } from "../../domain/usecases/recovery-room-usecase";
import { RecoveryRoomRepository } from "../../repository/impl/recovery-room-repository";
import { IRecoveryRoomRepository } from "../../repository/recovery-room-repository";

export function recoveryRoomFactory(): IRecoveryRoom {
  const recoveryRoomRepository: IRecoveryRoomRepository =
    new RecoveryRoomRepository();
  const recoveryRoomUsecase: IRecoveryRoom = new RecoveryRoomUsecase(
    recoveryRoomRepository
  );
  return recoveryRoomUsecase;
}
