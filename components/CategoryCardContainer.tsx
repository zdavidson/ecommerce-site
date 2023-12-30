import { Box, Container } from "@mui/material";
import React from "react";
import CategoryCard from "./CategoryCard";

const CategoryCardContainer = () => {
  return (
    <Box sx={{ margin: "4rem 0" }}>
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <CategoryCard category="headphones" />
        <CategoryCard category="speakers" />
        <CategoryCard category="earphones" />
      </Container>
    </Box>
  );
};

export default CategoryCardContainer;
