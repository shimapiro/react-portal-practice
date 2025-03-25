import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById, updateUser } from "../api/userApi";
import { FormData, validationSchema } from "../utils/validationSchema";

const EditUser = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormData>({ resolver: zodResolver(validationSchema) });

  useEffect(() => {
    if (!id) return;

    getUserById(id)
      .then((res) => {
        reset({
          name: res.data.name,
          email: res.data.email,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log("取得失敗", err);
        setLoading(false);
      });
  }, [id, reset]);

  const onSubmit = async (data: FormData) => {
    try {
      await updateUser(id as string, data);
      alert("更新しました");
      navigate("/users");
    } catch (err) {
      console.log("更新失敗", err);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
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
            {...register("name")}
            fullWidth
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            label="メールアドレス"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            fullWidth
          />
          <Button
            variant="contained"
            type="submit"
            disabled={!isValid || isSubmitting}
          >
            {isSubmitting ? "送信中..." : "更新"}
          </Button>
        </>
      )}
    </Box>
  );
};

export default EditUser;
