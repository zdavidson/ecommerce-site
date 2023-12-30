import { Box, Typography } from "@mui/material";
import React from "react";

interface Props {
  category: string;
}

const CategoryPageHeader = ({ category }: Props) => {
  return (
    <Box
      sx={{
        backgroundColor: "#1a1a1a",
        color: "white",
        minHeight: "15rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h1"
        sx={{ textTransform: "uppercase", fontSize: "2.5rem", fontWeight: 800 }}
      >
        {category}
      </Typography>
    </Box>
  );
};

export default CategoryPageHeader;
