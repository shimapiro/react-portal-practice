import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type User = {
  id: number;
  name: string;
  email: string;
};

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("データ取得失敗", err);
        setLoading(false);
      });
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 40 },
    { field: "name", headerName: "名前", width: 200 },
    { field: "email", headerName: "メール", width: 250 },
  ];

  return (
    <Box sx={{ height: "100%", maxWidth: 800, mx: "auto" }}>
      <Typography variant="h4" mb="20px" textAlign="center">
        ユーザー一覧
      </Typography>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          取得中...
        </Box>
      ) : (
        <DataGrid
          rows={users}
          columns={columns}
          pageSizeOptions={[5]}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 5, page: 0 },
            },
          }}
          sx={{ mb: 2 }}
        />
      )}
      <Button
        variant="outlined"
        component={Link}
        to="/"
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        ホームに戻る
      </Button>
    </Box>
  );
};

export default Users;
