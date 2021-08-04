import { Fab } from "@material-ui/core";
import { FloatingActionsWrapper, FloatingButton } from "../game.style";
import NavigationIcon from "@material-ui/icons/Navigation";
import DeleteIcon from "@material-ui/icons/Delete";

export const SectionActions = ({
  onPlay,
  onEmpty,
}: {
  onPlay: any;
  onEmpty: any;
}) => (
  <FloatingActionsWrapper>
    <FloatingButton onClick={onPlay}>
      <Fab variant="extended" color="primary" aria-label="add">
        <NavigationIcon />
        Novo lance
      </Fab>
    </FloatingButton>
    <FloatingButton onClick={onEmpty}>
      <Fab variant="extended" color="primary" aria-label="add">
        <DeleteIcon />
        Zerar
      </Fab>
    </FloatingButton>
  </FloatingActionsWrapper>
);
