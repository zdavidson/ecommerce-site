import { Box, Container, Typography, Button as MUIButton } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Button } from "./Button";
import ProductCounter from "./ProductCounter";
import { useAppDispatch } from "../store/hooks";
import { addToCart, startNewCart } from "../store/cartSlice";

interface Props {
  product: any;
}

const Product = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Image
        src={product.image?.desktop.replace(".", "") || ""}
        width={500}
        height={500}
        alt="headphones"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "75vh",
          width: "25vw",
          justifyContent: "center",
          marginLeft: "8rem",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textTransform: "uppercase",
            fontSize: "1.5rem",
            letterSpacing: "0.5rem",
            color: "#d97d45",
            marginBottom: "1rem",
          }}
        >
          New Product
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 600,
            marginBottom: "2rem",
            textTransform: "uppercase",
            fontSize: "4.5rem",
          }}
        >
          {product.name}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#727272", fontSize: "1.25rem", marginBottom: "3rem" }}
        >
          {product.description}
        </Typography>
        <Typography variant="h5">{product.price}</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ProductCounter productId={product.id} />
          <Button
            variant="contained"
            color="#d97d45"
            onClick={() => {
              dispatch(startNewCart());
              dispatch(
                addToCart({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.image.mobile.replace(".", ""),
                })
              );
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Product;