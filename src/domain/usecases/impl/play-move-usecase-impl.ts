import { IPlayMoveRepository } from "../../../repository/play-move-repository";
import { Room } from "../../entities/room";
import { IPlayMoveUsecase } from "../play-move-usecase";

export class PlayMoveUsecase implements IPlayMoveUsecase {

  constructor(
    private readonly playMoveRepository: IPlayMoveRepository
  ) {}

  private get roomID() {
    return window.location.pathname.split("/")[2];
  }

  private get userID() {
    return window.localStorage.getItem("uuid");
  }

  async execute(move: number): Promise<Room> {
    const playedMove: Room = await this.playMoveRepository.execute(this.roomID, move, this.userID || "");
    return playedMove;
  }
}