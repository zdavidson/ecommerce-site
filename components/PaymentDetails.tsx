import {
  Box,
  FormControlLabel,
  Radio,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const PaymentDetails = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "4rem",
        margin: "4rem 0",
        width: "70%",
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
        Checkout
      </Typography>
      <Box sx={{ marginBottom: "4rem" }}>
        <Typography
          variant="h2"
          sx={{
            textTransform: "uppercase",
            fontSize: "1.25rem",
            color: "#d87d4a",
            fontWeight: 500,
            marginBottom: "1.5rem",
          }}
        >
          Billing Details
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              placeholder="Alexei Ward"
              sx={{ width: "20rem", marginBottom: "1.5rem" }}
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              placeholder="alexi@mail.com"
              sx={{ width: "20rem" }}
            />
          </Box>
          <TextField
            id="phone"
            label="Phone Number"
            variant="outlined"
            placeholder="+1 202-555-0136"
            sx={{ width: "20rem" }}
          />
        </Box>
      </Box>
      <Box sx={{ marginBottom: "4rem" }}>
        <Typography
          variant="h2"
          sx={{
            textTransform: "uppercase",
            fontSize: "1.25rem",
            color: "#d87d4a",
            fontWeight: 500,
            marginBottom: "1.5rem",
          }}
        >
          Shipping Info
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <TextField
            id="address"
            label="Address"
            variant="outlined"
            placeholder="123 Main Street"
            sx={{ width: "100%", marginBottom: "1.5rem" }}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              id="zipcode"
              label="Zip Code"
              variant="outlined"
              placeholder="11001"
              sx={{ width: "20rem", marginBottom: "1.5rem" }}
            />
            <TextField
              id="city"
              label="City"
              variant="outlined"
              placeholder="New York"
              sx={{ width: "20rem" }}
            />
          </Box>
        </Box>
        <TextField
          id="country"
          label="Country"
          variant="outlined"
          placeholder="Country"
          sx={{ width: "20rem" }}
        />
      </Box>
      <Box>
        <Typography
          variant="h2"
          sx={{
            textTransform: "uppercase",
            fontSize: "1.25rem",
            color: "#d87d4a",
            fontWeight: 500,
            marginBottom: "1.5rem",
          }}
        >
          Payment Details
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography>Payment Method</Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "1rem",
              }}
            >
              <Box
                sx={{
                  padding: "1rem 2rem",
                  border: "1px solid lightgrey",
                  marginBottom: "1rem",
                }}
              >
                <FormControlLabel
                  value="e-money"
                  control={<Radio />}
                  label="e-Money"
                />
              </Box>
              <Box
                sx={{
                  padding: "1rem 2rem",
                  border: "1px solid lightgrey",
                }}
              >
                <FormControlLabel
                  value="cash-on-delivery"
                  control={<Radio />}
                  label="Cash on Delivery"
                />
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              id="e-money-number"
              label="e-Money Number"
              variant="outlined"
              placeholder="238590288"
              sx={{ width: "20rem", marginBottom: "1.5rem" }}
            />
            <TextField
              id="e-money-pin"
              label="e-Money Pin"
              variant="outlined"
              placeholder="6891"
              sx={{ width: "20rem" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PaymentDetails;
