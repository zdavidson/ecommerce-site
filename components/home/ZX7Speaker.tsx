import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Button } from "../Button";
import Link from "next/link";

const ZX7Speaker = () => {
  return (
    <Container>
      <Box
        sx={{
          backgroundImage: "url(/assets/home/desktop/image-speaker-zx7.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "20rem",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box sx={{ marginLeft: "4rem" }}>
          <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
            ZX7 SPEAKER
          </Typography>
          <Button variant="outlined" color="black">
            <Link href="/zx7-speaker">SEE PRODUCT</Link>
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ZX7Speaker;
