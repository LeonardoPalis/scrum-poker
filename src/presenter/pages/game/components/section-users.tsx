import { User } from "../../../../domain/entities/user";
import { Header } from "../game.style";
import { CardItem } from "./card-item";

export const SectionUsers = ({ users }: {users: User[] | undefined}) => (
  <Header>
    {users?.map((user: any) => (
      <CardItem user={user} />
    ))}
  </Header>
);
