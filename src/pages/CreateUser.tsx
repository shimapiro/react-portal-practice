import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../api/userApi";

const CreateUser = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("送信", name, email);

      await createUser({
        name,
        email,
      });

      navigate("/users");
      alert("登録しました");
    } catch (err) {
      console.error("送信失敗", err);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Typography variant="h5" textAlign="center">
        ユーザー登録
      </Typography>
      <TextField
        value={name}
        type="text"
        label="名前"
        onChange={(e) => setName(e.target.value)}
        fullWidth
        required
      />
      <TextField
        value={email}
        type="email"
        label="メールアドレス"
        onChange={(e) => setEmail(e.target.value)}
        required
        fullWidth
      />
      <Button type="submit" variant="contained" fullWidth>
        登録
      </Button>
    </Box>
  );
};

export default CreateUser;
