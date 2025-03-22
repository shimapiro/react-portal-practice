import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>ホームページです</h1>

      <Button variant="contained" component={Link} to="/users">
        ユーザー一覧へ
      </Button>
    </div>
  );
};

export default Home;
