/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($id: ID, $name: String) {
    onCreateUser(id: $id, name: $name) {
      id
      name
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($id: ID, $name: String) {
    onUpdateUser(id: $id, name: $name) {
      id
      name
    }
  }
`;
export const onPutUserOnRoom = /* GraphQL */ `
  subscription OnPutUserOnRoom($id: ID) {
    onPutUserOnRoom(id: $id) {
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
export const onPutMoveOnRoom = /* GraphQL */ `
  subscription OnPutMoveOnRoom($id: ID) {
    onPutMoveOnRoom(id: $id) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($id: ID, $name: String) {
    onDeleteUser(id: $id, name: $name) {
      id
      name
    }
  }
`;
export const onCreateRoom = /* GraphQL */ `
  subscription OnCreateRoom($id: ID, $name: String) {
    onCreateRoom(id: $id, name: $name) {
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
export const onUpdateRoom = /* GraphQL */ `
  subscription OnUpdateRoom($id: ID, $name: String) {
    onUpdateRoom(id: $id, name: $name) {
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
export const onDeleteRoom = /* GraphQL */ `
  subscription OnDeleteRoom($id: ID, $name: String) {
    onDeleteRoom(id: $id, name: $name) {
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
export const onCreateUserOnline = /* GraphQL */ `
  subscription OnCreateUserOnline($id: ID, $name: String) {
    onCreateUserOnline(id: $id, name: $name) {
      id
      name
    }
  }
`;
export const onUpdateUserOnline = /* GraphQL */ `
  subscription OnUpdateUserOnline($id: ID, $name: String) {
    onUpdateUserOnline(id: $id, name: $name) {
      id
      name
    }
  }
`;
export const onDeleteUserOnline = /* GraphQL */ `
  subscription OnDeleteUserOnline($id: ID, $name: String) {
    onDeleteUserOnline(id: $id, name: $name) {
      id
      name
    }
  }
`;
export const onCreateRoundFormat = /* GraphQL */ `
  subscription OnCreateRoundFormat($id: ID, $title: String) {
    onCreateRoundFormat(id: $id, title: $title) {
      id
      title
      moves {
        title
        value
      }
    }
  }
`;
export const onUpdateRoundFormat = /* GraphQL */ `
  subscription OnUpdateRoundFormat($id: ID, $title: String) {
    onUpdateRoundFormat(id: $id, title: $title) {
      id
      title
      moves {
        title
        value
      }
    }
  }
`;
export const onDeleteRoundFormat = /* GraphQL */ `
  subscription OnDeleteRoundFormat($id: ID, $title: String) {
    onDeleteRoundFormat(id: $id, title: $title) {
      id
      title
      moves {
        title
        value
      }
    }
  }
`;
