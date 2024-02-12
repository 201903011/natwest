import PropTypes from "prop-types";
import { m } from "framer-motion";
// @mui
import { CircularProgress, alpha, styled } from "@mui/material";
import { Box } from "@mui/material";
//
// import Logo from './Logo';
import ProgressBar from "./progressbar";

// ----------------------------------------------------------------------

export default function LoadingScreen({ isDashboard, ...other }) {
  return (
    <>
      <ProgressBar />

      <CircularProgress />
    </>
  );
}
