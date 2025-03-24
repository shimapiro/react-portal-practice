import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById, updateUser } from "../api/userApi";

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    getUserById(id)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setLoading(false);
      })
      .catch((err) => {
        console.log("取得失敗", err);
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await updateUser(id as string, {
        name,
        email,
      });
      alert("更新しました");
      navigate("/users");
    } catch (err) {
      console.log("更新失敗", err);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 5,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h5" textAlign="center">
        ユーザー編集
      </Typography>
      {loading ? (
        <Typography textAlign="center">取得中...</Typography>
      ) : (
        <>
          <TextField
            label="名前"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
          <TextField
            label="メールアドレス"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
          <Button variant="contained" type="submit">
            更新
          </Button>
        </>
      )}
    </Box>
  );
};

export default EditUser;
