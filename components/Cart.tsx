import { Box, Typography } from "@mui/material";
import React from "react";
import { Button } from "./Button";

const Cart = () => {
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
          <Typography>Remove All</Typography>
        </Box>
        <Box>PRODUCTS</Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Total</Typography>
          <Typography>$$$</Typography>
        </Box>
        <Button
          color="#d97d45"
          variant="contained"
          sx={{ width: "100%", marginTop: "1rem" }}
        >
          Checkout
        </Button>
      </Box>
    </Box>
  );
};

export default Cart;
