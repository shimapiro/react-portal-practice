import { Box, Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type User = {
  id: number;
  name: string;
  email: string;
};

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("データ取得失敗", err);
        setLoading(false);
      });
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 40 },
    { field: "name", headerName: "名前", width: 200 },
    { field: "email", headerName: "メール", width: 250 },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <h2>ユーザー一覧</h2>
      {loading ? (
        <Box>取得中...</Box>
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
        />
      )}

      <Button variant="outlined" component={Link} to="/" sx={{ mt: 2 }}>
        ホームに戻る
      </Button>
    </Box>
  );
};

export default Users;
