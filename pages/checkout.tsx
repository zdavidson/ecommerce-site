import { NextPage } from "next";
import React from "react";
import Nav from "../components/Nav";
import { Footer } from "../components/shared/Footer";
import { Box, Container } from "@mui/material";
import PaymentDetails from "../components/PaymentDetails";
import Summary from "../components/Summary";

const Checkout: NextPage = () => {
  return (
    <div style={{ backgroundColor: "#f1f1f1" }}>
      <Nav />
      <Container>
        <Box sx={{ display: "flex" }}>
          <PaymentDetails />
          <Summary />
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default Checkout;
