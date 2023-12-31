import { Container, Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

import { Button } from "../Button";
import Link from "next/link";

const ZX9Speaker = () => {
  return (
    <Container>
      <Box
        sx={{
          backgroundColor: "#d87d4a",
          backgroundImage: "url(./assets/home/desktop/pattern-circles.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "-150px",
          color: "white",
          display: "flex",
          alignItems: "center",
          marginBottom: "5rem",
        }}
      >
        <Box>
          <Image
            src="/assets/home/desktop/image-speaker-zx9.png"
            alt="zx9-speaker"
            width={400}
            height={500}
            style={{ margin: "7rem 8rem 0 8rem", zIndex: 4 }}
          />
        </Box>
        <Box sx={{ marginRight: "10rem" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 600,
              marginBottom: "2rem",
              textTransform: "uppercase",
              fontSize: "4.5rem",
            }}
          >
            ZX9 SPEAKER
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "1.25rem", marginBottom: "3rem" }}
          >
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </Typography>
          <Button color="black" variant="contained">
            <Link href="/zx9-speaker">SEE PRODUCT</Link>
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ZX9Speaker;
