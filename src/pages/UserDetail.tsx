import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

type User = {
  id: number;
  name: string;
  email: string;
};

const UserDetail = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("取得失敗", err);
        setLoading(false);
      });
  }, [id]);

  return (
    <Box textAlign="center">
      <Typography variant="h4" mb={2}>
        ユーザー情報
      </Typography>
      {loading ? (
        <Typography>取得中...</Typography>
      ) : user ? (
        <Box>
          <Typography variant="h6">ID:{user.id}</Typography>
          <Typography variant="h6">Name:{user.name}</Typography>
          <Typography variant="h6">Email:{user.email}</Typography>
        </Box>
      ) : (
        <Typography>ユーザーが見つかりません</Typography>
      )}

      <Button variant="outlined" component={Link} to="/users" sx={{mt:3}}>一覧に戻る</Button>
    </Box>
  );
};

export default UserDetail;
