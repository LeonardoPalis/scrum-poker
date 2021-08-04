export interface IPutUserOnRoomListenerRepository<T> {
  execute(roomID: string, callback: (element: T) => void) : void;
}