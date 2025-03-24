import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

type User = {
  id: number;
  name: string;
  email: string;
};

const UserDetail = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

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

  const handleDelete = async () => {
    if (!window.confirm("本当に削除しますか？")) return;
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      alert("削除しました");
      navigate("/users");
    } catch (err) {
      console.log("削除失敗", err);
    }
  };

  return (
    <Box textAlign="center">
      <Typography variant="h4" mb={2}>
        ユーザー情報
      </Typography>
      {loading ? (
        <Typography>取得中...</Typography>
      ) : user ? (
        <Box>
          <Typography textAlign="left" variant="h6">
            ID:{user.id}
          </Typography>
          <Typography textAlign="left" variant="h6">
            Name:{user.name}
          </Typography>
          <Typography textAlign="left" variant="h6">
            Email:{user.email}
          </Typography>
        </Box>
      ) : (
        <Typography>ユーザーが見つかりません</Typography>
      )}

      <Box display="flex" justifyContent="center" gap={2} mt={3}>
        <Button variant="outlined" onClick={() => navigate(`/users`)}>
          一覧に戻る
        </Button>
        <Button
          variant="outlined"
          onClick={() => navigate(`/users/${id}/edit`)}
        >
          編集
        </Button>

        <Button variant="contained" color="error" onClick={handleDelete}>
          削除
        </Button>
      </Box>
    </Box>
  );
};

export default UserDetail;
