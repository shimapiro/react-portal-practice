import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

// 全体レイアウト（ヘッダー・メイン・フッター）

const Layout = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      width="100%"
      pb="64px"
    >
      <Header />
      <Box
        component="main"
        flexGrow={1}
        p={4}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {" "}
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
