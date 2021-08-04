/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($name: String!) {
    getUser(name: $name) {
      id
      name
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: TableUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
      }
      nextToken
    }
  }
`;
export const getRoom = /* GraphQL */ `
  query GetRoom($id: ID!) {
    getRoom(id: $id) {
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
export const listRooms = /* GraphQL */ `
  query ListRooms(
    $filter: TableRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUserOnline = /* GraphQL */ `
  query GetUserOnline($id: ID!) {
    getUserOnline(id: $id) {
      id
      name
    }
  }
`;
export const listUserOnlines = /* GraphQL */ `
  query ListUserOnlines(
    $filter: TableUserOnlineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserOnlines(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
      }
      nextToken
    }
  }
`;
export const getRoundFormat = /* GraphQL */ `
  query GetRoundFormat($id: ID!) {
    getRoundFormat(id: $id) {
      id
      title
      moves {
        title
        value
      }
    }
  }
`;
export const listRoundFormats = /* GraphQL */ `
  query ListRoundFormats(
    $filter: TableRoundFormatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoundFormats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        moves {
          title
          value
        }
      }
      nextToken
    }
  }
`;
