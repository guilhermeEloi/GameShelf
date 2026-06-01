import Chip from "@mui/material/Chip";
import { statusConfig } from "./styles";

type Status = "playing" | "completed" | "wishlist" | "dropped";

type StatusBadgeProps = {
  status: Status;
};

function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <Chip
      label={config.label}
      size="small"
      sx={{ ...config.sx, fontSize: "10px", height: "20px" }}
    />
  );
}

export default StatusBadge;
