import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#f5f5f5",
        padding: "16px",
        textAlign: "center",
        zIndex: 1100, // ヘッダーと重ならないように
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © 2025 My React Portal
      </Typography>
    </Box>
  );
};

export default Footer;
