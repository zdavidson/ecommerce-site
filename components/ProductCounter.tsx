import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";

interface Props {
  productId: number;
}

const ProductCounter = ({ productId }: Props) => {
  const [count, setCount] = useState(0);

  return (
    <Box
      sx={{
        backgroundColor: "#f1f1f1",
        padding: "0.75rem",
        marginRight: "0.5rem",
      }}
    >
      <Button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </Button>
      {count}
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </Button>
    </Box>
  );
};

export default ProductCounter;
