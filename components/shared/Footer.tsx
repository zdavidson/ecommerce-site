import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <Box
      sx={{
        padding: "2rem 0",
        color: "white",
        backgroundColor: "#191919",
      }}
    >
      <Container>
        <Box
          sx={{
            backgroundColor: "#d87d4a",
            height: "0.25rem",
            width: "7rem",
            position: "relative",
            top: "-32px",
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link href="/">
            <Image
              src="./assets/shared/desktop/logo.svg"
              alt="logo"
              width={150}
              height={30}
            />
          </Link>
          <ul style={{ textTransform: "uppercase", textDecoration: "none" }}>
            <Link href="/" style={{ marginRight: "2rem", fontWeight: 700 }}>
              Home
            </Link>
            <Link href="/" style={{ marginRight: "2rem", fontWeight: 700 }}>
              Headphones
            </Link>
            <Link href="/" style={{ marginRight: "2rem", fontWeight: 700 }}>
              Speakers
            </Link>
            <Link href="/" style={{ fontWeight: 700 }}>
              Earphones
            </Link>
          </ul>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1rem",
            alignItems: "flex-end",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "#8d8d8d",
              fontSize: "1rem",
              maxWidth: "30rem",
            }}
          >
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Image
              src="/assets/shared/desktop/icon-facebook.svg"
              alt="facebook-icon"
              width={25}
              height={25}
            />
            <Image
              src="/assets/shared/desktop/icon-twitter.svg"
              alt="twitter-icon"
              width={25}
              height={25}
              style={{ marginLeft: "1rem" }}
            />
            <Image
              src="/assets/shared/desktop/icon-instagram.svg"
              alt="instagram-icon"
              width={25}
              height={25}
              style={{ marginLeft: "1rem" }}
            />
          </Box>
        </Box>
        <Typography
          variant="body1"
          sx={{
            color: "#8d8d8d",
            fontSize: "1rem",
            maxWidth: "30rem",
            marginTop: "4rem",
          }}
        >
          Copyright 2021. All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
};
