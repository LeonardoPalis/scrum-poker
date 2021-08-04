/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
};

export type User = {
  __typename: "User",
  id?: string | null,
  name?: string | null,
};

export type PutUserOnRoomInput = {
  id: string,
  userName: string,
  userID: string,
};

export type Room = {
  __typename: "Room",
  id: string,
  name?: string | null,
  users?:  Array<User | null > | null,
  onlineUsers?:  Array<User | null > | null,
  teste?: string | null,
  rounds?:  Array<RoundType | null > | null,
  ups?: number | null,
  testes?: Array< string | null > | null,
  roundFormatID?: string | null,
};

export type RoundType = {
  __typename: "RoundType",
  userID: string,
  move: number,
};

export type PutMoveOnRoomInput = {
  id: string,
  userID: string,
  move: number,
};

export type DeleteMovesOnRoomInput = {
  id: string,
};

export type CreateRoundOnRoomInput = {
  id: string,
  move: number,
  userID: string,
};

export type DeleteUserOnRoom = {
  id: string,
  userID: string,
};

export type UpdateUserInput = {
  id?: string | null,
  name: string,
};

export type DeleteUserInput = {
  name: string,
};

export type CreateRoomInput = {
  name: string,
  roundFormatID?: string | null,
};

export type UpdateRoomInput = {
  id: string,
  users?: Array< UserOnlineInput | null > | null,
};

export type UserOnlineInput = {
  id?: string | null,
  name: string,
};

export type DeleteRoomInput = {
  id: string,
};

export type CreateUserOnlineInput = {
  name: string,
  id?: string | null,
};

export type UserOnline = {
  __typename: "UserOnline",
  id: string,
  name: string,
};

export type UpdateUserOnlineInput = {
  id: string,
  name?: string | null,
};

export type DeleteUserOnlineInput = {
  id: string,
};

export type CreateRoundFormatInput = {
  title: string,
};

export type RoundFormat = {
  __typename: "RoundFormat",
  id: string,
  title: string,
  moves?:  Array<Move | null > | null,
};

export type Move = {
  __typename: "Move",
  title: string,
  value: number,
};

export type UpdateRoundFormatInput = {
  id: string,
  title?: string | null,
  value: number,
};

export type DeleteRoundFormatInput = {
  id: string,
};

export type TableUserFilterInput = {
  id?: TableIDFilterInput | null,
  name?: TableStringFilterInput | null,
};

export type TableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type UserConnection = {
  __typename: "UserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type TableRoomFilterInput = {
  id?: TableIDFilterInput | null,
  name?: TableStringFilterInput | null,
};

export type RoomConnection = {
  __typename: "RoomConnection",
  items?:  Array<Room | null > | null,
  nextToken?: string | null,
};

export type TableUserOnlineFilterInput = {
  id?: TableIDFilterInput | null,
  name?: TableStringFilterInput | null,
};

export type UserOnlineConnection = {
  __typename: "UserOnlineConnection",
  items?:  Array<UserOnline | null > | null,
  nextToken?: string | null,
};

export type TableRoundFormatFilterInput = {
  id?: TableIDFilterInput | null,
  title?: TableStringFilterInput | null,
};

export type RoundFormatConnection = {
  __typename: "RoundFormatConnection",
  items?:  Array<RoundFormat | null > | null,
  nextToken?: string | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id?: string | null,
    name?: string | null,
  } | null,
};

export type PutUserOnRoomMutationVariables = {
  input: PutUserOnRoomInput,
};

export type PutUserOnRoomMutation = {
  putUserOnRoom?:  {
    __typename: "Room",
    id: string,
    name?: string | null,
    users?:  Array< {
      __typename: "User",
      id?: string | null,
      name?: string | null,
    } | null > | null,
    onlineUsers?:  Array< {
      __typename: "User",
      id?: string | null,
      name?: string | null,
    } | null > | null,
    teste?: string | null,
    rounds?:  Array< {
      __typename: "RoundType",
      userID: string,
      move: number,
    } | null > | null,
    ups?: number | null,
    testes?: Array< string | null > | null,
    roundFormatID?: string | null,
  } | null,
};

export type PutMoveOnRoomMutationVariables = {
  input: PutMoveOnRoomInput,
};

export type PutMoveOnRoomMutation = {
  putMoveOnRoom?:  {
    __typename: "Room",
    id: string,
    name?: string | null,
    users?:  Array< {
      __typename: "User",
      id?: string | null,
      name?: string | null,
    } | null > | null,
    onlineUsers?:  Array< {
      __typename: "User",
      id?: string | null,
      name?: string | null,
    } | null > | null,
    teste?: string | null,
    rounds?:  Array< {
      __typename: "RoundType",
      userID: string,
      move: number,
    } | null > | null,
    ups?: number | null,
    testes?: Array< string | null > | null,
    roundFormatID?: string | null,
  } | null,
};

export type DeleteMovesOnRoomMutationVariables = {
  input: DeleteMovesOnRoomInput,
};

export type DeleteMovesOnRoomMutation = {
  deleteMovesOnRoom?:  {
    __typename: "Room",
    id: string,
    name?: string | null,
    users?:  Array< {
      __typename: "User",
      id?: string | null,
      name?: string | null,
    } | null > | null,
    onlineUsers?:  Array< {
      __typename: "User",
      id?: string | null,
      name?: string | null,
    } | null > | null,
    teste?: string | null,
    rounds?:  Array< {
      __typename: "RoundType",
      userID: string,
      move: number,
    } | null > | null,
    ups?: number | null,
    testes?: Array< string | null > | null,
    roundFormatID?: string | null,
  } | null,
};

export type CreateRoundOnRoomMutationVariables = {
  input: CreateRoundOnRoomInput,
};

export type CreateRoundOnRoomMutation = {
  createRoundOnRoom?:  {
    __typename: "Room",
    id: string,
    name?: string | null,
    users?:  Array< {
      __typename: "User",
      id?: string | null,
      name?: string | null,
    } | null > | null,
    onlineUsers?:  Array< {
      __typename: "User",
      id?: string | null,
      name?: string | null,
    } | null > | null,
    teste?: string | null,
    rounds?:  Array< {
      __typename: "RoundType",
      userID: string,
      move: number,
    } | null > | null,
    ups?: number | null,
    testes?: Array< string | null > | null,
    roundFormatID?: string | null,
  } | null,
};

export type DeleteUserOnRoomMutationVariables = {
  input?: DeleteUserOnRoom | null,
};

export type DeleteUserOnRoomMutation = {
  deleteUserOnRoom?:  {
    __typename: "Room",
    id: string,
    name?: string | null,
    users?:  Array< {
      __typename: "User",
      id?: string | null,
      name?: string | null,
    } | null > | null,
    onlineUsers?:  Array< {
      __typename: "User",
      id?: string | null,
      name?: string | null,
    } | null > | null,
    teste?: string | null,
    rounds?:  Array< {
      __typename: "RoundType",
      userID: string,
      move: number,
    } | null > | null,
    ups?: number | null,
    testes?: Array< string | null > | null,
    roundFormatID?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id?: string | null,
    name?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id?: string | null,
    name?: string | null,
  } | null,
};

export type CreateRoomMutationVariables = {
  input: CreateRoomInput,
};

export type CreateRoomMutation = {
  createRoom?:  {
    __typename: "Room",
    id: string,
    name?: string | null,
    users?:  Array< {
      __typename: "User",
      id?: string | null,
      name?: string | null,
    } | null > | null,
    onlineUsers?:  Array< {
      __typename: "User",
      id?: string | null,
      name?: string | null,
    } | null > | null,
    teste?: string | null,
    rounds?:  Array< {
      __typename: "RoundType",
      userID: string,
      move: number,
    } | null > | null,
    ups?: number | null,
    testes?: Array< string | null > | null,
    roundFormatID?: string | null,
  } | null,
};

export type UpdateRoomMutationVariables = {
  input: UpdateRoomInput,
};

export type UpdateRoomMutation = {
  updateRoom?:  {
    __typename: "Room",
    id: string,
    name?: string | null,
    users?:  Array< {
      __typename: "User",
      id?: string | null,
      name?: string | null,
    } | null > | null,
    onlineUsers?:  Array< {
      __typename: "User",
      id?: string | null,
      name?: string | null,
    } | null > | null,
    teste?: string | null,
    rounds?:  Array< {
      __typename: "RoundType",
      userID: string,
      move: number,
    } | null > | null,
    ups?: number | null,
    testes?: Array< string | null > | null,
    roundFormatID?: string | null,
  } | null,
};

export type DeleteRoomMutationVariables = {
  input: DeleteRoomInput,
};

export type DeleteRoomMutation = {
  deleteRoom?:  {
    __typename: "Room",
    id: string,
    name?: string | null,
    users?:  Array< {
      __typename: "User",
      id?: string | null,
      name?: string | null,
    } | null > | null,
    onlineUsers?:  Array< {
      __typename: "User",
      id?: string | null,
      name?: string | null,
    } | null > | null,
    teste?: string | null,
    rounds?:  Array< {
      __typename: "RoundType",
      userID: string,
      move: number,
    } | null > | null,
    ups?: number | null,
    testes?: Array< string | null > | null,
    roundFormatID?: string | null,
  } | null,
};

export type CreateUserOnlineMutationVariables = {
  input: CreateUserOnlineInput,
};

export type CreateUserOnlineMutation = {
  createUserOnline?:  {
    __typename: "UserOnline",
    id: string,
    name: string,
  } | null,
};

export type UpdateUserOnlineMutationVariables = {
  input: UpdateUserOnlineInput,
};

export type UpdateUserOnlineMutation = {
  updateUserOnline?:  {
    __typename: "UserOnline",
    id: string,
    name: string,
  } | null,
};

export type DeleteUserOnlineMutationVariables = {
  input: DeleteUserOnlineInput,
};

export type DeleteUserOnlineMutation = {
  deleteUserOnline?:  {
    __typename: "UserOnline",
    id: string,
    name: string,
  } | null,
};

export type CreateRoundFormatMutationVariables = {
  input: CreateRoundFormatInput,
};

export type CreateRoundFormatMutation = {
  createRoundFormat?:  {
    __typename: "RoundFormat",
    id: string,
    title: string,
    moves?:  Array< {
      __typename: "Move",
      title: string,
      value: number,
    } | null > | null,
  } | null,
};

export type UpdateRoundFormatMutationVariables = {
  input: UpdateRoundFormatInput,
};

export type UpdateRoundFormatMutation = {
  updateRoundFormat?:  {
    __typename: "RoundFormat",
    id: string,
    title: string,
    moves?:  Array< {
      __typename: "Move",
      title: string,
      value: number,
    } | null > | null,
  } | null,
};

export type DeleteRoundFormatMutationVariables = {
  input: DeleteRoundFormatInput,
};

export type DeleteRoundFormatMutation = {
  deleteRoundFormat?:  {
    __typename: "RoundFormat",
    id: string,
    title: string,
    moves?:  Array< {
      __typename: "Move",
      title: string,
      value: number,
    } | null > | null,
  } | null,
};

export type GetUserQueryVariables = {
  name: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id?: string | null,
    name?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: TableUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "UserConnection",
    items?:  Array< {
      __typename: "User",
      id?: string | null,
      name?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetRoomQueryVariables = {
  id: string,
};

export type GetRoomQuery = {
  getRoom?:  {
    __typename: "Room",
    id: string,
    name?: string | null,
    users?:  Array< {
      __typename: "User",
      id?: string | null,
      name?: string | null,
    } | null > | null,
    onlineUsers?:  Array< {
      __typename: "User",
      id?: string | null,
      name?: string | null,
    } | null > | null,
    teste?: string | null,
    rounds?:  Array< {
      __typename: "RoundType",
      userID: string,
      move: number,
    } | null > | null,
    ups?: number | null,
    testes?: Array< string | null > | null,
    roundFormatID?: string | null,
  } | null,
};

export type ListRoomsQueryVariables = {
  filter?: TableRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRoomsQuery = {
  listRooms?:  {
    __typename: "RoomConnection",
    items?:  Array< {
      __typename: "Room",
      id: string,
      name?: string | null,
      users?:  Array< {
        __typename: "User",
        id?: string | null,
        name?: string | null,
      } | null > | null,
      onlineUsers?:  Array< {
        __typename: "User",
        id?: string | null,
        name?: string | null,
      } | null > | null,
      teste?: string | null,
      rounds?:  Array< {
        __typename: "RoundType",
        userID: string,
        move: number,
      } | null > | null,
      ups?: number | null,
      testes?: Array< string | null > | null,
      roundFormatID?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetUserOnlineQueryVariables = {
  id: string,
};

export type GetUserOnlineQuery = {
  getUserOnline?:  {
    __typename: "UserOnline",
    id: string,
    name: string,
  } | null,
};

export type ListUserOnlinesQueryVariables = {
  filter?: TableUserOnlineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserOnlinesQuery = {
  listUserOnlines?:  {
    __typename: "UserOnlineConnection",
    items?:  Array< {
      __typename: "UserOnline",
      id: string,
      name: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetRoundFormatQueryVariables = {
  id: string,
};

export type GetRoundFormatQuery = {
  getRoundFormat?:  {
    __typename: "RoundFormat",
    id: string,
    title: string,
    moves?:  Array< {
      __typename: "Move",
      title: string,
      value: number,
    } | null > | null,
  } | null,
};

export type ListRoundFormatsQueryVariables = {
  filter?: TableRoundFormatFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRoundFormatsQuery = {
  listRoundFormats?:  {
    __typename: "RoundFormatConnection",
    items?:  Array< {
      __typename: "RoundFormat",
      id: string,
      title: string,
      moves?:  Array< {
        __typename: "Move",
        title: string,
        value: number,
      } | null > | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id?: string | null,
    name?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id?: string | null,
    name?: string | null,
  } | null,
};

export type OnPutUserOnRoomSubscriptionVariables = {
  id?: string | null,
};

export type OnPutUserOnRoomSubscription = {
  onPutUserOnRoom?:  {
    __typename: "Room",
    id: string,
    name?: string | null,
    users?:  Array< {
      __typename: "User",
      id?: string | null,
      name?: string | null,
    } | null > | null,
    onlineUsers?:  Array< {
      __typename: "User",
      id?: string | null,
      name?: string | null,
    } | null > | null,
    teste?: string | null,
    rounds?:  Array< {
      __typename: "RoundType",
      userID: string,
      move: number,
    } | null > | null,
    ups?: number | null,
    testes?: Array< string | null > | null,
    roundFormatID?: string | null,
  } | null,
};

export type OnPutMoveOnRoomSubscriptionVariables = {
  id?: string | null,
};

export type OnPutMoveOnRoomSubscription = {
  onPutMoveOnRoom?:  {
    __typename: "Room",
    id: string,
    name?: string | null,
    users?:  Array< {
      __typename: "User",
      id?: string | null,
      name?: string | null,
    } | null > | null,
    onlineUsers?:  Array< {
      __typename: "User",
      id?: string | null,
      name?: string | null,
    } | null > | null,
    teste?: string | null,
    rounds?:  Array< {
      __typename: "RoundType",
      userID: string,
      move: number,
    } | null > | null,
    ups?: number | null,
    testes?: Array< string | null > | null,
    roundFormatID?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id?: string | null,
    name?: string | null,
  } | null,
};

export type OnCreateRoomSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
};

export type OnCreateRoomSubscription = {
  onCreateRoom?:  {
    __typename: "Room",
    id: string,
    name?: string | null,
    users?:  Array< {
      __typename: "User",
      id?: string | null,
      name?: string | null,
    } | null > | null,
    onlineUsers?:  Array< {
      __typename: "User",
      id?: string | null,
      name?: string | null,
    } | null > | null,
    teste?: string | null,
    rounds?:  Array< {
      __typename: "RoundType",
      userID: string,
      move: number,
    } | null > | null,
    ups?: number | null,
    testes?: Array< string | null > | null,
    roundFormatID?: string | null,
  } | null,
};

export type OnUpdateRoomSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
};

export type OnUpdateRoomSubscription = {
  onUpdateRoom?:  {
    __typename: "Room",
    id: string,
    name?: string | null,
    users?:  Array< {
      __typename: "User",
      id?: string | null,
      name?: string | null,
    } | null > | null,
    onlineUsers?:  Array< {
      __typename: "User",
      id?: string | null,
      name?: string | null,
    } | null > | null,
    teste?: string | null,
    rounds?:  Array< {
      __typename: "RoundType",
      userID: string,
      move: number,
    } | null > | null,
    ups?: number | null,
    testes?: Array< string | null > | null,
    roundFormatID?: string | null,
  } | null,
};

export type OnDeleteRoomSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
};

export type OnDeleteRoomSubscription = {
  onDeleteRoom?:  {
    __typename: "Room",
    id: string,
    name?: string | null,
    users?:  Array< {
      __typename: "User",
      id?: string | null,
      name?: string | null,
    } | null > | null,
    onlineUsers?:  Array< {
      __typename: "User",
      id?: string | null,
      name?: string | null,
    } | null > | null,
    teste?: string | null,
    rounds?:  Array< {
      __typename: "RoundType",
      userID: string,
      move: number,
    } | null > | null,
    ups?: number | null,
    testes?: Array< string | null > | null,
    roundFormatID?: string | null,
  } | null,
};

export type OnCreateUserOnlineSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
};

export type OnCreateUserOnlineSubscription = {
  onCreateUserOnline?:  {
    __typename: "UserOnline",
    id: string,
    name: string,
  } | null,
};

export type OnUpdateUserOnlineSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
};

export type OnUpdateUserOnlineSubscription = {
  onUpdateUserOnline?:  {
    __typename: "UserOnline",
    id: string,
    name: string,
  } | null,
};

export type OnDeleteUserOnlineSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
};

export type OnDeleteUserOnlineSubscription = {
  onDeleteUserOnline?:  {
    __typename: "UserOnline",
    id: string,
    name: string,
  } | null,
};

export type OnCreateRoundFormatSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
};

export type OnCreateRoundFormatSubscription = {
  onCreateRoundFormat?:  {
    __typename: "RoundFormat",
    id: string,
    title: string,
    moves?:  Array< {
      __typename: "Move",
      title: string,
      value: number,
    } | null > | null,
  } | null,
};

export type OnUpdateRoundFormatSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
};

export type OnUpdateRoundFormatSubscription = {
  onUpdateRoundFormat?:  {
    __typename: "RoundFormat",
    id: string,
    title: string,
    moves?:  Array< {
      __typename: "Move",
      title: string,
      value: number,
    } | null > | null,
  } | null,
};

export type OnDeleteRoundFormatSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
};

export type OnDeleteRoundFormatSubscription = {
  onDeleteRoundFormat?:  {
    __typename: "RoundFormat",
    id: string,
    title: string,
    moves?:  Array< {
      __typename: "Move",
      title: string,
      value: number,
    } | null > | null,
  } | null,
};
