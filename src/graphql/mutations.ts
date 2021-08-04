/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
    }
  }
`;
export const putUserOnRoom = /* GraphQL */ `
  mutation PutUserOnRoom($input: PutUserOnRoomInput!) {
    putUserOnRoom(input: $input) {
      id
      name
      users {
        id
        name
      }
      onlineUsers {
        id
        name
      }
      teste
      rounds {
        userID
        move
      }
      ups
      testes
      roundFormatID
    }
  }
`;
export const putMoveOnRoom = /* GraphQL */ `
  mutation PutMoveOnRoom($input: PutMoveOnRoomInput!) {
    putMoveOnRoom(input: $input) {
      id
      name
      users {
        id
        name
      }
      onlineUsers {
        id
        name
      }
      teste
      rounds {
        userID
        move
      }
      ups
      testes
      roundFormatID
    }
  }
`;
export const deleteMovesOnRoom = /* GraphQL */ `
  mutation DeleteMovesOnRoom($input: DeleteMovesOnRoomInput!) {
    deleteMovesOnRoom(input: $input) {
      id
      name
      users {
        id
        name
      }
      onlineUsers {
        id
        name
      }
      teste
      rounds {
        userID
        move
      }
      ups
      testes
      roundFormatID
    }
  }
`;
export const createRoundOnRoom = /* GraphQL */ `
  mutation CreateRoundOnRoom($input: CreateRoundOnRoomInput!) {
    createRoundOnRoom(input: $input) {
      id
      name
      users {
        id
        name
      }
      onlineUsers {
        id
        name
      }
      teste
      rounds {
        userID
        move
      }
      ups
      testes
      roundFormatID
    }
  }
`;
export const deleteUserOnRoom = /* GraphQL */ `
  mutation DeleteUserOnRoom($input: DeleteUserOnRoom) {
    deleteUserOnRoom(input: $input) {
      id
      name
      users {
        id
        name
      }
      onlineUsers {
        id
        name
      }
      teste
      rounds {
        userID
        move
      }
      ups
      testes
      roundFormatID
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      id
      name
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser($input: DeleteUserInput!) {
    deleteUser(input: $input) {
      id
      name
    }
  }
`;
export const createRoom = /* GraphQL */ `
  mutation CreateRoom($input: CreateRoomInput!) {
    createRoom(input: $input) {
      id
      name
      users {
        id
        name
      }
      onlineUsers {
        id
        name
      }
      teste
      rounds {
        userID
        move
      }
      ups
      testes
      roundFormatID
    }
  }
`;
export const updateRoom = /* GraphQL */ `
  mutation UpdateRoom($input: UpdateRoomInput!) {
    updateRoom(input: $input) {
      id
      name
      users {
        id
        name
      }
      onlineUsers {
        id
        name
      }
      teste
      rounds {
        userID
        move
      }
      ups
      testes
      roundFormatID
    }
  }
`;
export const deleteRoom = /* GraphQL */ `
  mutation DeleteRoom($input: DeleteRoomInput!) {
    deleteRoom(input: $input) {
      id
      name
      users {
        id
        name
      }
      onlineUsers {
        id
        name
      }
      teste
      rounds {
        userID
        move
      }
      ups
      testes
      roundFormatID
    }
  }
`;
export const createUserOnline = /* GraphQL */ `
  mutation CreateUserOnline($input: CreateUserOnlineInput!) {
    createUserOnline(input: $input) {
      id
      name
    }
  }
`;
export const updateUserOnline = /* GraphQL */ `
  mutation UpdateUserOnline($input: UpdateUserOnlineInput!) {
    updateUserOnline(input: $input) {
      id
      name
    }
  }
`;
export const deleteUserOnline = /* GraphQL */ `
  mutation DeleteUserOnline($input: DeleteUserOnlineInput!) {
    deleteUserOnline(input: $input) {
      id
      name
    }
  }
`;
export const createRoundFormat = /* GraphQL */ `
  mutation CreateRoundFormat($input: CreateRoundFormatInput!) {
    createRoundFormat(input: $input) {
      id
      title
      moves {
        title
        value
      }
    }
  }
`;
export const updateRoundFormat = /* GraphQL */ `
  mutation UpdateRoundFormat($input: UpdateRoundFormatInput!) {
    updateRoundFormat(input: $input) {
      id
      title
      moves {
        title
        value
      }
    }
  }
`;
export const deleteRoundFormat = /* GraphQL */ `
  mutation DeleteRoundFormat($input: DeleteRoundFormatInput!) {
    deleteRoundFormat(input: $input) {
      id
      title
      moves {
        title
        value
      }
    }
  }
`;
