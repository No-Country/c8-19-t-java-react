import { useState } from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import { BsStar } from "react-icons/bs";

const labels = {
  0.5: "Malo",
  1: "Malo+",
  1.5: "Promedio",
  2: "Promedio+",
  2.5: "Decente",
  3: "Decente+",
  3.5: "Bueno",
  4: "Bueno+",
  4.5: "Excelente",
  5: "Excelente+",
};

function getLabelText(value) {
  return `${value} Star ${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

export default function RatingComponent({ value, setValue, hover, setHover }) {
  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<BsStar style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]} </Box>
      )}
    </Box>
  );
}
