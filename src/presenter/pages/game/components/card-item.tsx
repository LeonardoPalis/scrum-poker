import { Box, Card, CardContent } from "@material-ui/core";
import { User } from "../../../../domain/entities/user";

export const CardItem = ({ user }: { user: User }) => {
  return (
    <Box width={125} margin="0 16px">
      <Card>
        <CardContent>
          <Box color="#252525" fontWeight="200" fontSize={16} marginBottom={2}>
            jogador
          </Box>
          <Box color="#252525" fontWeight="bold" fontSize={16}>
            {user.name}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};