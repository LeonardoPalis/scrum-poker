import { PlayMoveUsecase } from "../../domain/usecases/impl/play-move-usecase-impl";
import { IPlayMoveUsecase } from "../../domain/usecases/play-move-usecase";
import { PlayMoveRepository } from "../../repository/impl/play-move-repository";
import { IPlayMoveRepository } from "../../repository/play-move-repository";

export function playMoveFactory(): IPlayMoveUsecase {
  const playMoveRepository: IPlayMoveRepository =
    new PlayMoveRepository();
  const playMoveUsecase: IPlayMoveUsecase = new PlayMoveUsecase(
    playMoveRepository
  );
  return playMoveUsecase;
}
