import MuiButton from "@mui/material/Button";
import type { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { containedSx, outlinedSx } from "./styles";

type ButtonProps = MuiButtonProps & {
  variant?: "contained" | "outlined";
};

function Button({ variant = "contained", sx, children, ...rest }: ButtonProps) {
  return (
    <MuiButton
      fullWidth
      variant={variant}
      sx={{ ...(variant === "contained" ? containedSx : outlinedSx), ...sx }}
      {...rest}
    >
      {children}
    </MuiButton>
  );
}

export default Button;
