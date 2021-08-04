import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";

export const AppHeader = () => (
  <AppBar position="static">
    <Toolbar variant="dense">
      <IconButton edge="start" color="inherit" aria-label="menu"></IconButton>
      <Typography variant="h6" color="inherit">
        Scrum Poker
      </Typography>
    </Toolbar>
  </AppBar>
);
