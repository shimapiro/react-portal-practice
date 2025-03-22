import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>Home</div>
      <Button variant="contained" component={Link} to="/users">
        ユーザー一覧へ
      </Button>
    </>
  );
};

export default Home;
