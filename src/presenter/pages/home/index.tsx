import { useEffect } from "react";
import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { Room } from "../../../domain/entities/room";
import { createRoomFactory } from "../../factories/create-room-factory";
import { listRoundFormaysFactory } from "../../factories/list-round-formats-factory";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Box from "@material-ui/core/Box";
import { RoundFormat } from "../../../domain/entities/round-format";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@material-ui/core/TextField";
import backgroundImage from "../../assets/images/backgroung.jpg";
import { Button, Container } from "@material-ui/core";
import { Content, HomeBackground, Subtitle, Title } from "./home.style";

const schema = yup.object().shape({
  roomName: yup.string().required(),
  username: yup.string().required(),
  roundFormat: yup.string().required(),
});

export function Home() {
  const [newRoom, setNewRoom] = useState<boolean>(false);
  const [roundFormats, setRoundFormats] = useState<RoundFormat[]>([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();
  const createRoomUsecase = createRoomFactory();
  const listRoundFormatsUsecase = listRoundFormaysFactory();

  useEffect(() => {
    listRoundFormats();
  }, []);

  const listRoundFormats = async () => {
    const response: RoundFormat[] = await listRoundFormatsUsecase.execute();
    console.log("TEST", response);
    setRoundFormats(response);
  };

  const handleSelectNewRoom = () => {
    setNewRoom(true);
  };

  const handleCreateRoom = async (e: FormEvent<HTMLFormElement>) => {
    const roomName: string = watch("roomName");
    const username: string = watch("username");
    const roundFormat: string = watch("roundFormat");
    const createdRoom: Room = await createRoomUsecase.execute(
      roomName,
      roundFormat
    );
    history.push(`/game/${createdRoom.id}?identifyName=${username}`);
  };

  return (
    <Container>
      <HomeBackground src={backgroundImage} />
      <Content>
        <Title>Scrum poker</Title>
        <Subtitle>Jogue de forma gratuita!</Subtitle>

        {!newRoom && (
          <Button onClick={handleSelectNewRoom} variant="outlined">
            Começar
          </Button>
        )}
        {newRoom && (
          <>
            <form onSubmit={handleSubmit(handleCreateRoom)}>
              <Box display="flex" flexDirection="column">
                <Box margin="16px 0">
                  <TextField
                    error={errors["roomName"]}
                    {...register("roomName")}
                    id="roomName"
                    label="nome da sala"
                    variant="outlined"
                    helperText={errors["roomName"] && "campo obrigatório"}
                  />
                </Box>
                <TextField
                  error={errors["username"]}
                  {...register("username")}
                  id="username"
                  label="seu nome"
                  variant="outlined"
                  helperText={errors["username"] && "campo obrigatório"}
                />
              </Box>

              <Box width="100%" margin="16px 0">
                <FormControl fullWidth variant="outlined">
                  <InputLabel
                    error={errors["roundFormat"]}
                    id="demo-simple-select-filled-label"
                  >
                    Formato do jogo
                  </InputLabel>
                  <Select
                    {...register("roundFormat")}
                    error={errors["roundFormat"]}
                  >
                    {roundFormats.map((roundFormat) => (
                      <MenuItem value={roundFormat.id}>
                        {roundFormat.title}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText error={errors["roundFormat"]}>
                    {errors["roundFormat"] && "campo obrigatório"}
                  </FormHelperText>
                </FormControl>
              </Box>
              <Button type="submit" variant="outlined">
                Criar sala
              </Button>
            </form>
          </>
        )}
      </Content>
    </Container>
  );
}
