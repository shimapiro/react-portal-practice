import { useMsal } from "@azure/msal-react";
import { Box, Button, Typography } from "@mui/material";

const Login = () => {
  const { instance, accounts } = useMsal();

  const handleLogin = () => {
    instance.loginRedirect();
  };


  return (
    <Box textAlign="center">
      <Typography variant="h4" textAlign="center">
        LoginPage
      </Typography>

      {accounts.length > 0 ? (
        <>
          <Typography mt={2}>ようこそ、{accounts[0].name}さん</Typography>
          <Typography>{accounts[0].username}</Typography>
          <Button variant="outlined" color="error" onClick={()=>instance.logoutRedirect()}>ログアウトする</Button>
        </>
      ) : (
        <Button onClick={handleLogin} variant="contained" sx={{ mt: 2 }}>
          Microsoftログインする
        </Button>
      )}
    </Box>
  );
};

export default Login;
