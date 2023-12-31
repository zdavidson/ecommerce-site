import { Box, Typography, Button as MUIButton } from "@mui/material";
import React from "react";
import { Button } from "./Button";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { clearCart } from "../store/cartSlice";
import Link from "next/link";

const Cart = () => {
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <Box
      sx={{
        position: "absolute",
        height: "100vh",
        width: "99.2vw",
        backgroundColor: "rgba(0,0,0,0.5)",
        top: 120,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          right: 400,
          top: 20,
          minHeight: "20vh",
          width: "20vw",
          backgroundColor: "white",
          color: "black",
          padding: "1.5rem",
          textTransform: "uppercase",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Cart</Typography>
          <MUIButton onClick={() => dispatch(clearCart())}>
            Remove All
          </MUIButton>
        </Box>
        {cart.map((product) => {
          return (
            <Box
              key={product.id}
              sx={{
                display: "flex",
                margin: "1rem 0",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Image
                  src={product.image.mobile.replace(".", "")}
                  width={50}
                  height={50}
                  alt="headphones"
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "1rem",
                  }}
                >
                  <Typography variant="body1">{product.name}</Typography>
                  <Typography variant="body2" sx={{ color: " #6f7275" }}>
                    ${product.price}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <Typography sx={{ fontSize: "0.75rem" }}>Count</Typography>
                <Typography variant="body1" sx={{ fontWeight: 800 }}>
                  {product.count}
                </Typography>
              </Box>
            </Box>
          );
        })}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Total</Typography>
          <Typography>$$$</Typography>
        </Box>
        <Button
          color="#d97d45"
          variant="contained"
          sx={{ width: "100%", marginTop: "1rem" }}
        >
          <Link href="/checkout">Checkout</Link>
        </Button>
      </Box>
    </Box>
  );
};

export default Cart;
