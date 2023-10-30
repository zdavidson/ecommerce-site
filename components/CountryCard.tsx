import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

interface Props {
  countryName: string;
  region: string;
  population: number | string;
  capital: string;
  flags: string;
}

const CountryCard = ({
  countryName,
  region,
  population,
  capital,
  flags,
}: Props) => {
  return (
    <Card sx={{ width: "20vw", marginBottom: "2rem" }}>
      <CardMedia
        sx={{ height: "15vh" }}
        image={flags}
        title={`${countryName} flag`}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: 800 }}
        >
          {countryName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Population:</b> {population}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Region:</b> {region}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Capital:</b> {capital}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CountryCard;
