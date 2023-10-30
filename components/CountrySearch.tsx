import React, { useEffect, useState } from "react";

import CountryCard from "./CountryCard";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";

const CountrySearch = () => {
  const [data, setData] = useState([
    {
      name: { common: "" },
      region: "",
      population: "",
      capital: [""],
      flags: { png: "" },
    },
  ]);
  const [filteredCountries, setFilteredCountries] = useState(data);
  const [isLoading, setIsLoading] = useState(true);

  const [region, setRegion] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setRegion(event.target.value as string);
  };

  const filterCountries = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFilteredCountries(
      data.filter((country) =>
        country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredCountries(data);
        setIsLoading(false);
      });
  }, []);

  console.log(data);
  console.log(filteredCountries);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ padding: "2rem" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <TextField
          id="outlined-basic"
          label="Search for a country..."
          variant="outlined"
          sx={{ width: "35vw" }}
          onChange={(e) => filterCountries(e)}
        />
        <FormControl size="medium" sx={{ width: "20vw" }}>
          <InputLabel id="demo-simple-select-label">
            Filter by Region
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={region}
            label="Region"
            onChange={handleChange}
          >
            <MenuItem value="Africa">Africa</MenuItem>
            <MenuItem value="America">America</MenuItem>
            <MenuItem value="Asia">Asia</MenuItem>
            <MenuItem value="Europe">Europe</MenuItem>
            <MenuItem value="Oceania">Oceania</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "2rem 0",
          flexWrap: "wrap",
        }}
      >
        {filteredCountries.map((country) => {
          return (
            <CountryCard
              countryName={country.name.common}
              flags={country.flags.png}
              population={country.population}
              region={country.region}
              capital={country.capital[0] ? country.capital[0] : ""}
              key={country.name.common}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default CountrySearch;
