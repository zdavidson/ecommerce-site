import { Box, Typography } from "@mui/material";
import React from "react";
import { Button } from "./Button";
import Link from "next/link";

const Hero = () => {
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
      <Typography
        variant="h3"
        sx={{
          textTransform: "uppercase",
          fontSize: "1.5rem",
          letterSpacing: "0.5rem",
          color: "#4f4f4f",
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
        XX99 Mark II Headphones
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: "#727272", fontSize: "1.25rem", marginBottom: "3rem" }}
      >
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </Typography>
      <Button variant="contained" color="#d97d45">
        <Link href="/xx99-mark-two-headphones">See Product</Link>
      </Button>
    </Box>
  );
};

export default Hero;
