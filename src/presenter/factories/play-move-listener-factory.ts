import { Room } from "../../domain/entities/room";
import { PlayMoveListenerUsecase } from "../../domain/usecases/impl/play-move-listener-usecase";
import { IPlayMoveListenerUsecase } from "../../domain/usecases/play-move-listener-usecase";
import { PlayMoveLListenerRepository } from "../../repository/impl/play-move-listener-repository-impl";
import { IPlayMoveListenerRepository } from "../../repository/play-move-listener-repository";

export function playMoveListenerFactory(): IPlayMoveListenerUsecase {
  const playMoveListenerRepository: IPlayMoveListenerRepository<Room> =
    new PlayMoveLListenerRepository();
  const playMoveListenerUsecase: IPlayMoveListenerUsecase = new PlayMoveListenerUsecase(
    playMoveListenerRepository
  );
  return playMoveListenerUsecase;
}
