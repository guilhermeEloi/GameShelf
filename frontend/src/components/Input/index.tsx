import { useState } from "react";
import type { ReactNode } from "react";
import TextField from "@mui/material/TextField";
import type { OutlinedTextFieldProps } from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { inputSx } from "./styles";

type InputProps = Omit<OutlinedTextFieldProps, "variant"> & {
  startIcon?: ReactNode;
};

function Input({ startIcon, type, ...rest }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <TextField
      fullWidth
      variant="outlined"
      type={isPassword && showPassword ? "text" : type}
      sx={inputSx}
      slotProps={{
        input: {
          startAdornment: startIcon ? (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ) : undefined,
          endAdornment: isPassword ? (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword((prev) => !prev)}
                edge="end"
                size="small"
              >
                {showPassword ? (
                  <VisibilityOff sx={{ fontSize: 18 }} />
                ) : (
                  <Visibility sx={{ fontSize: 18 }} />
                )}
              </IconButton>
            </InputAdornment>
          ) : undefined,
        },
      }}
      {...rest}
    />
  );
}

export default Input;
