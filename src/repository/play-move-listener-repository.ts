export interface IPlayMoveListenerRepository<T> {
  execute(roomID: string, callback: (element: T) => void) : void;
}