import { Box, Typography } from "@mui/material";
import React from "react";
import { Button } from "./Button";
import { useAppSelector } from "../store/hooks";
import Image from "next/image";

const Summary = () => {
  const { cart } = useAppSelector((state) => state.cart);

  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "2rem",
        margin: "4rem 0",
        marginLeft: "2rem",
        width: "25%",
        height: "30%",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: "2rem",
          textTransform: "uppercase",
          fontWeight: 800,
          letterSpacing: 1.5,
          marginBottom: "2rem",
        }}
      >
        Summary
      </Typography>
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
      <Box sx={{ marginBottom: "2rem" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "#808080",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Total
          </Typography>
          <Typography variant="body1">$$$</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="body1"
            sx={{
              color: "#808080",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Shipping
          </Typography>
          <Typography variant="body1">$$$</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="body1"
            sx={{
              color: "#808080",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Tax
          </Typography>
          <Typography variant="body1">$$$</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="body1"
          sx={{ color: "#808080", textTransform: "uppercase", fontWeight: 600 }}
        >
          Grand Total
        </Typography>
        <Typography variant="body1">$$$</Typography>
      </Box>
      <Button
        variant="contained"
        color="#d87d4a"
        sx={{ marginTop: "1rem", width: "100%" }}
      >
        Continue & Pay
      </Button>
    </Box>
  );
};

export default Summary;
