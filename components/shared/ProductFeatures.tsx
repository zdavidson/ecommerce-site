import { Box, Container, Typography } from "@mui/material";
import React from "react";

interface Interface {
  quantity: number;
  item: string;
}

interface Props {
  features: string;
  includes: Interface[];
}

const ProductFeatures = ({ features, includes }: Props) => {
  return (
    <Container>
      <Box sx={{ display: "flex", marginBottom: "8rem" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "space-between",
            maxWidth: "60%",
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
            Features
          </Typography>
          <Typography>{features}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "space-between",
            marginLeft: "5rem",
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
            In The Box
          </Typography>
          {includes.map((item) => {
            return (
              <Typography key={item.item}>
                <span style={{ color: "#d87d4a", marginRight: "0.5rem" }}>
                  {item.quantity}x
                </span>{" "}
                {item.item}
              </Typography>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default ProductFeatures;
