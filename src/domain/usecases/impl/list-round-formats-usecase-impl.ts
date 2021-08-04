import { IListRoundFormatsRepository } from "../../../repository/list-round-formats-repository";
import { RoundFormat } from "../../entities/round-format";
import { IListRoundFormats } from "../list-round-formats-usecase";

export class ListRoundFormatsUsecase implements IListRoundFormats {

  constructor(
    private readonly listRoundFormatsRepository: IListRoundFormatsRepository
  ) {}

  get roomID() {
    return window.location.pathname.split("/")[2];
  }

  async execute(): Promise<RoundFormat[]> {
    const roundFormats: RoundFormat[] = await this.listRoundFormatsRepository.execute();
    return roundFormats;
  }
}