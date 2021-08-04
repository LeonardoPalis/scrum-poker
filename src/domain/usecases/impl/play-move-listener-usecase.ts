import { IPlayMoveListenerRepository } from "../../../repository/play-move-listener-repository";
import { Room } from "../../entities/room";
import { IPlayMoveListenerUsecase } from "../play-move-listener-usecase";

export class PlayMoveListenerUsecase implements IPlayMoveListenerUsecase {

  constructor(
    private readonly playMoveListenerRepository: IPlayMoveListenerRepository<Room>
  ) {}

  get roomID() {
    return window.location.pathname.split("/")[2];
  }

  async execute(callback: (room: Room) => void): Promise<void> {
    this.playMoveListenerRepository.execute(this.roomID, callback);
  }
}