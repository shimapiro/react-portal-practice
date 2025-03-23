import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h4" fontWeight="bold" mb={2}>
        ホームページです
      </Typography>
      <Button variant="contained" component={Link} to="/users">
        ユーザー一覧へ
      </Button>
    </Box>
  );
};

export default Home;
