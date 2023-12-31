import React from "react";
import MuiButton from "@mui/material/Button";
import { SxProps, Theme } from "@mui/material";

interface Props {
  color: string;
  variant: "text" | "outlined" | "contained";
  children: React.ReactNode;
  sx?: SxProps<Theme>;
  onClick?: () => void;
}

export const Button = ({ color, variant, children, sx, onClick }: Props) => {
  return (
    <MuiButton
      onClick={onClick}
      variant={variant}
      sx={{
        background: variant !== "outlined" ? color : null,
        color: variant === "outlined" ? color : "auto",
        border: variant === "outlined" ? `1px solid ${color}` : null,
        width: "10rem",
        padding: "1rem 2rem",
        borderRadius: 0,
        fontWeight: 800,
        ...sx,
      }}
    >
      {children}
    </MuiButton>
  );
};
