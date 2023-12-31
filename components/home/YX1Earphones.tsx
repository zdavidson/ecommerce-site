import { Box, Container, Link, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

import { Button } from "../Button";

const YX1Earphones = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "6rem",
        }}
      >
        <Image
          src="/assets/home/desktop/image-earphones-yx1.jpg"
          alt="yx1-earphones"
          width={800}
          height={300}
        />

        <Box
          sx={{
            backgroundColor: "#F1F1F1",
            width: "70%",
            marginLeft: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: "10rem",
          }}
        >
          <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
            YX1 EARPHONES
          </Typography>
          <Button variant="outlined" color="black">
            <Link href="/yx1-earphones">SEE PRODUCT</Link>
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default YX1Earphones;
