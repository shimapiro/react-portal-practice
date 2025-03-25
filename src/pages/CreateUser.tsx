import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Snackbar, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createUser } from "../api/userApi";
import { FormData, validationSchema } from "../utils/validationSchema";

const CreateUser = () => {
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormData>({
    mode: "onChange",
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      console.log("送信");

      await createUser(data);
      setOpenSnackbar(true);

      setTimeout(() => {
        navigate("/users");
      }, 1500);

      // alert("登録しました");
    } catch (err) {
      console.error("送信失敗", err);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Typography variant="h5" textAlign="center">
        ユーザー登録
      </Typography>
      <TextField
        label="名前"
        {...register("name")}
        fullWidth
        required
        helperText={errors.name?.message}
        error={!!errors.name}
      />
      <TextField
        {...register("email")}
        label="メールアドレス"
        fullWidth
        helperText={errors.email?.message}
        error={!!errors.email}
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        disabled={!isValid || isSubmitting}
      >
        {isSubmitting ? "送信中..." : "登録"}
      </Button>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message="登録しました"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      />
    </Box>
  );
};

export default CreateUser;
