import { Box, Container, Typography, Button as MUIButton } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./Button";
import { useAppDispatch } from "../store/hooks";
import { addToCart } from "../store/cartSlice";
import { APIProduct } from "../types";

interface Props {
  product: APIProduct;
}

const Product = ({ product }: Props) => {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState(0);

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
        <Typography variant="h5" sx={{ marginBottom: "2rem", fontWeight: 700 }}>
          ${product.price}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              backgroundColor: "#f1f1f1",
              padding: "0.75rem",
              marginRight: "0.5rem",
            }}
          >
            <MUIButton
              onClick={() => {
                setCount(count - 1);
              }}
            >
              -
            </MUIButton>
            {count}
            <MUIButton
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </MUIButton>
          </Box>
          <Button
            variant="contained"
            color="#d97d45"
            onClick={() => {
              dispatch(addToCart({ ...product, count }));
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
