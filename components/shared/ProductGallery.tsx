import { Box, Container } from "@mui/material";
import Image from "next/image";
import React from "react";

interface Props {
  gallery: {
    first: { desktop: string };
    second: { desktop: string };
    third: { desktop: string };
  };
}

const ProductGallery = ({ gallery }: Props) => {
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Image
            src={gallery.first.desktop.replace(".", "")}
            alt="product-image"
            height={275}
            width={500}
          />
          <Image
            src={gallery.second.desktop.replace(".", "")}
            alt="product-image"
            height={275}
            width={500}
          />
        </Box>
        <Image
          src={gallery.third.desktop.replace(".", "")}
          alt="product-image"
          height={600}
          width={600}
        />
      </Box>
    </Container>
  );
};

export default ProductGallery;
