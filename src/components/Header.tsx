import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My React Portal
        </Typography>
        <Button color="inherit" component={Link} to="/">
          ホーム
        </Button>
        <Button color="inherit" component={Link} to="/users">
          ユーザー一覧
        </Button>
        <Button color="inherit" component={Link} to="/users/create">
          登録
        </Button>
        <Button color="inherit" component={Link} to="/login">
          ログイン
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
