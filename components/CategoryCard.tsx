import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  category: string;
}

const CategoryCard = ({ category }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minWidth: "20rem",
      }}
    >
      <Image
        src={`/assets/shared/desktop/image-category-thumbnail-${category}.png`}
        width={250}
        height={225}
        alt={category}
      />
      <Typography
        variant="h4"
        sx={{
          marginBottom: "1rem",
          textTransform: "uppercase",
          fontSize: "1.5rem",
        }}
      >
        {category}
      </Typography>
      <Link href={`/${category}`} style={{ color: "#8f8f8f" }}>
        SHOP
      </Link>
      <Box
        sx={{
          backgroundColor: "#f1f1f1",
          width: "100%",
          height: "14rem",
          position: "relative",
          bottom: "190px",
          zIndex: "-1",
        }}
      ></Box>
    </Box>
  );
};

export default CategoryCard;
