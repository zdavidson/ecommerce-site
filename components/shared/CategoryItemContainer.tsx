import { Box, Container } from "@mui/material";
import React from "react";
import CategoryItemDescription from "./CategoryItemDescription";
import CategoryItemImage from "./CategoryItemImage";
import { APIProduct } from "../../types";

interface Props {
  item: APIProduct;
}

const CategoryItemContainer = ({ item }: Props) => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {item.id % 2 === 0 ? (
          <CategoryItemImage
            src={item.image.desktop.replace(".", "")}
            name={item.name}
          />
        ) : null}
        <CategoryItemDescription
          isNew={item.new}
          name={item.name}
          description={item.description}
          slug={item.slug}
        />
        {item.id % 2 !== 0 ? (
          <CategoryItemImage
            src={item.image.desktop.replace(".", "")}
            name={item.name}
          />
        ) : null}
      </Box>
    </Container>
  );
};

export default CategoryItemContainer;
