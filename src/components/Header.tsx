import { Link } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
      <AppBar>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My React Portal
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/users">
            Users
          </Button>
        </Toolbar>
      </AppBar>
  );
};

export default Header;
