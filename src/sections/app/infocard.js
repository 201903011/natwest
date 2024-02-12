import PropTypes from "prop-types";
// @mui
import { styled } from "@mui/material/styles";
import {
  Box,
  Card,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Stack,
} from "@mui/material";
import { GridMoreVertIcon } from "@mui/x-data-grid";
// utilsonents

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

InfoCard.propTypes = {
  info: PropTypes.object.isRequired,
};

export default function InfoCard({ info }) {
  //   console.log(info.data.main.temp);

  return (
    <>
      <Stack
        spacing={2}
        justifyContent={"space-evenly"}
        direction={{ xs: "column", sm: "row" }}
        sx={{ p: 3, bgcolor: "background.neutral" }}
      >
        <Typography variant="h5" gutterBottom>
          Temp
        </Typography>
        <Typography>295.00</Typography>
      </Stack>
    </>
  );
}
