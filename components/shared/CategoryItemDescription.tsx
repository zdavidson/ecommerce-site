import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { Button } from "../Button";

interface Props {
  isNew: boolean;
  name: string;
  description: string;
  slug: string;
}

const CategoryItemDescription = ({ isNew, name, description, slug }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "75vh",
        width: "25vw",
        justifyContent: "center",
      }}
    >
      {isNew ? (
        <Typography
          variant="h3"
          sx={{
            textTransform: "uppercase",
            fontSize: "1rem",
            fontWeight: 600,
            letterSpacing: "1.5rem",
            color: "#d87d4a",
            marginBottom: "1rem",
          }}
        >
          New Product
        </Typography>
      ) : null}
      <Typography
        variant="h1"
        sx={{
          fontWeight: 500,
          marginBottom: "2rem",
          textTransform: "uppercase",
          fontSize: "3.5rem",
        }}
      >
        {name}
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontSize: "1.25rem", marginBottom: "3rem" }}
      >
        {description}
      </Typography>
      <Button variant="contained" color="#d97d45">
        <Link href={`/${slug}`}>See Product</Link>
      </Button>
    </Box>
  );
};

export default CategoryItemDescription;
