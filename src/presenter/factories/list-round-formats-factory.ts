import { ListRoundFormatsUsecase } from "../../domain/usecases/impl/list-round-formats-usecase-impl";
import { IListRoundFormats } from "../../domain/usecases/list-round-formats-usecase";
import { ListRoundFormatsRepository } from "../../repository/impl/list-round-formats-repository-impl";
import { IListRoundFormatsRepository } from "../../repository/list-round-formats-repository";

export function listRoundFormaysFactory(): IListRoundFormats {
  const listRoundFormatsRepository: IListRoundFormatsRepository =
    new ListRoundFormatsRepository();
  const listRoundFormats: IListRoundFormats = new ListRoundFormatsUsecase(
    listRoundFormatsRepository
  );
  return listRoundFormats;
}
