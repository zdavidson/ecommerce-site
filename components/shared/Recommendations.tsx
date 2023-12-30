import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { Button } from "../Button";

interface Props {
  recommendations: any[];
}

const Recommendations = ({ recommendations }: Props) => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "8rem 0",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textTransform: "uppercase",
            fontSize: "2rem",
            fontWeight: 500,
            marginBottom: "4rem",
          }}
        >
          You May Also Like
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {recommendations.map((product) => {
            return (
              <Box
                key={product.slug}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Image
                  src={product.image.desktop.replace(".", "")}
                  alt={product.name}
                  width={375}
                  height={350}
                />
                <Typography
                  variant="h3"
                  sx={{
                    textTransform: "uppercase",
                    fontSize: "2rem",
                    fontWeight: 500,
                    margin: "2rem 0",
                  }}
                >
                  {product.name}
                </Typography>
                <Button variant="contained" color="#d87d4a">
                  See Product
                </Button>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default Recommendations;
