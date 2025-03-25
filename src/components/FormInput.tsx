import { TextField } from "@mui/material";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormData } from "../utils/validationSchema";

type Props = {
  label: string;
  name: keyof FormData;
  register: UseFormRegister<FormData>; 
  errors: FieldErrors<FormData>;
};

const FormInput = ({ label, name, register, errors }: Props) => {
  return (
    <>
      <TextField
        label={label}
        {...register(name)}
        fullWidth
        required
        helperText={errors[name]?.message}
        error={!!errors[name]}
      />
    </>
  );
};

export default FormInput;
