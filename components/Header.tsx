import { Button, Typography } from "@mui/material";
import React from "react";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "1rem 2rem",
        boxShadow: "0px 2px 2px lightgrey",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h1" sx={{ fontSize: "1rem", fontWeight: 800 }}>
        Where in the World?{" "}
      </Typography>
      <Button>
        <NightlightRoundIcon />
        Dark Mode
      </Button>
    </div>
  );
};

export default Header;
