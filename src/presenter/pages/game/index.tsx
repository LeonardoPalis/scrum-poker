import { Button, Snackbar } from "@material-ui/core";
import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { createUserFactory } from "../../factories/create-user-factory";
import { User } from "../../../domain/entities/user";
import { putUserOnRoomFactory } from "../../factories/put-user-on-room";
import { IPutUserOnRoom } from "../../../domain/usecases/put-user-on-room";
import { ICreateUser } from "../../../domain/usecases/create-user-usecase";
import { IRecoveryRoom } from "../../../domain/usecases/recovery-room-usecase";
import { recoveryRoomFactory } from "../../factories/recovery-room-factory";
import { Room } from "../../../domain/entities/room";
import { putUserOnRoomListenerFactory } from "../../factories/put-user-on-room-listener";
import { IPutUserOnRoomListener } from "../../../domain/usecases/put-user-on-room-listener-usecase";
import { IRecoveryRoundFormat } from "../../../domain/usecases/recovery-round-format-usecase";
import { recoveryRoundFormatFactory } from "../../factories/recovery-round-format-factory";
import { RoundFormat } from "../../../domain/entities/round-format";
import Drawer from "@material-ui/core/Drawer";
import { IPlayMoveListenerUsecase } from "../../../domain/usecases/play-move-listener-usecase";
import { playMoveListenerFactory } from "../../factories/play-move-listener-factory";
import { IPlayMoveUsecase } from "../../../domain/usecases/play-move-usecase";
import { playMoveFactory } from "../../factories/play-move-factory";
import { Move } from "../../../domain/entities/move";
import { IDeleteMovesOnRoom } from "../../../domain/usecases/delete-moves-on-room-usecase";
import { deleteMovesOnRoomFactory } from "../../factories/delete-moves-on-room-factory";
import { Alert } from "@material-ui/lab";
import {
  Moves,
} from "./game.style";
import { MovementCardItem } from "./components/movement-card";
import { EmptyMovementCardItem } from "./components/empty-movement-card-item";
import { AppHeader } from "./components/app-header";
import { SectionUsers } from "./components/section-users";
import { SectionActions } from "./components/section-actions";

export function GamePage() {
  const location = useLocation();
  const [users, setUsers] = useState<User[] | undefined>([]);
  const [openedMenu, setOpenedMenu] = useState<boolean>(false);
  const [updatedRoom, setUpdatedRoom] = useState<Room>();
  const [lastMovements, setLastMovements] = useState<Move[]>([]);
  const [enterNewUser, setEnterNewUser] = useState<boolean>(false);

  const [recoveredRoundFormat, setRecoveredRoundFormat] =
    useState<RoundFormat>();

  const createUserUsecase: ICreateUser = createUserFactory();
  const putUserOnRoom: IPutUserOnRoom = putUserOnRoomFactory();
  const recoveryRoundFormat: IRecoveryRoundFormat =
    recoveryRoundFormatFactory();
  const deleteMovesOnRoom: IDeleteMovesOnRoom = deleteMovesOnRoomFactory();
  const putUserOnRoomListenerUsecase: IPutUserOnRoomListener =
    putUserOnRoomListenerFactory();
  const recoveryRoomUsecase: IRecoveryRoom = recoveryRoomFactory();
  const playMoveListenerUsecase: IPlayMoveListenerUsecase =
    playMoveListenerFactory();
  const playMoveUsecase: IPlayMoveUsecase = playMoveFactory();

  const putUserInRoom = useCallback(async () => {
    const username = location.search.split("?identifyName=")[1];
    const createdUser: User = await createUserUsecase.execute(username);
    const rooms: Room = await recoveryRoomUsecase.execute();
    const recoveryRoundFormatValue: RoundFormat =
      await recoveryRoundFormat.execute(rooms.roundFormatID || "");
    setRecoveredRoundFormat(recoveryRoundFormatValue);
    try {
      const updatedRoom = await putUserOnRoom.execute(
        createdUser.name,
        createdUser.id ?? ""
      );
      setUsers(updatedRoom.onlineUsers);
      setUpdatedRoom(updatedRoom);
    } catch (e) {
      setUsers(rooms.onlineUsers);
      setUpdatedRoom(rooms);
    }
  }, []);

  const getUsernameById = (userID: String) => {
    const currentUser: User | undefined = updatedRoom?.onlineUsers?.find(
      (user) => user.id === userID
    );
    return currentUser?.name;
  };

  const getLastMoveByUser = (
    room: Room | undefined,
    userID?: string
  ): Move | null => {
    const moves: Move[] | undefined = room?.rounds;
    console.log(room);
    const movements: Move[] | undefined = moves?.filter(
      (move: Move) => move.userID === userID
    );
    if (movements) {
      return movements[movements.length - 1];
    }
    return null;
  };

  const mountMoves = (room: Room | undefined, users: User[] | undefined) => {
    return users?.reduce((acc: any, user: any) => {
      const lastMoveByUser = getLastMoveByUser(room, user.id);
      return acc.concat(lastMoveByUser);
    }, []);
  };

  useEffect(() => {
    const moves = mountMoves(updatedRoom, users);
    setLastMovements(moves);
  }, [updatedRoom]);

  const putUserOnRoomCallback = (room: Room): void => {
    setUsers(room.onlineUsers);
    setEnterNewUser(true);
  };

  const playMoveCallback = (room: Room): void => {
    setUpdatedRoom(room);
  };

  const handlePlayMove = (value: Number) => {
    console.log("AA", value);
    playMoveUsecase.execute(value as number);
    setOpenedMenu(false);
  };

  useEffect(() => {
    putUserOnRoomListenerUsecase.execute(putUserOnRoomCallback);
    playMoveListenerUsecase.execute(playMoveCallback);
    putUserInRoom();
  }, []);

  const handleDeleleteMoves = () => {
    deleteMovesOnRoom.execute();
  };

  const handleCloseSnackbar = () => {
    setEnterNewUser(false);
  };

  return (
    <>
      <AppHeader />
      <SectionUsers users={users} />
      <Moves>
        {lastMovements.map((move: Move) => {
          if (move) {
            return (
              <>
                <MovementCardItem
                  username={getUsernameById(move.userID)}
                  move={move}
                />
              </>
            );
          }
          return <EmptyMovementCardItem />;
        })}
      </Moves>
      <SectionActions onPlay={() => setOpenedMenu(true)} onEmpty={handleDeleleteMoves} />
      <Drawer
        anchor="bottom"
        open={openedMenu}
        onClose={() => setOpenedMenu(false)}
      >
        {recoveredRoundFormat?.moves.map((recovered, index) => (
          <Button
            onClick={() => handlePlayMove(recovered.value)}
            variant="contained"
            color={index % 2 === 0 ? "primary" : "secondary"}
            disableElevation
          >
            {recovered.title}
          </Button>
        ))}
      </Drawer>
      <Snackbar
        open={enterNewUser}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Novo usuário na sala
        </Alert>
      </Snackbar>
    </>
  );
}
