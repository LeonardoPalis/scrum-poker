import { Box, Card, CardContent } from "@material-ui/core";
import { Move } from "../../../../domain/entities/move";
import { CustomCard, CustomCardWrapper } from "../game.style";

export const MovementCardItem = ({ move, username }: { move: Move, username: string | undefined }) => {  
    return (
      <CustomCardWrapper>
        <CustomCard>
          <Card>
            <CardContent>
              <Box color="#252525" fontWeight="300" fontSize={16} marginBottom={2}>
                {username}
              </Box>
              <Box color="#252525" fontWeight="700" fontSize={22}>
                {move?.move}
              </Box>
            </CardContent>
          </Card>
        </CustomCard>
      </CustomCardWrapper>
    );
  };