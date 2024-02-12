import { useState } from "react";
import { Outlet } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import { Box, IconButton, Stack } from "@mui/material";
// hooks
// import useSettings from '../../hooks/useSettings';
import useResponsive from "../../hooks/use_responsive";
import useCollapseDrawer from "../../hooks/use_collapse";
// config
import { HEADER, NAVBAR } from "../../config";
//
// import DashboardHeader from './header';
import NavbarVertical from "./navbar/navbar_vertical";
import Iconify from "../../components/iconify";
// import NavbarHorizontal from './navbar/NavbarHorizontal';

// ----------------------------------------------------------------------

const MainStyle = styled("main", {
  shouldForwardProp: (prop) => prop !== "collapseClick",
})(({ collapseClick, theme }) => ({
  flexGrow: 1,
  paddingTop: HEADER.MOBILE_HEIGHT + 24,
  paddingBottom: HEADER.MOBILE_HEIGHT + 24,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
    paddingBottom: HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
    width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH}px)`,
    transition: theme.transitions.create("margin-left", {
      duration: theme.transitions.duration.shorter,
    }),
    ...(collapseClick && {
      marginLeft: NAVBAR.DASHBOARD_COLLAPSE_WIDTH,
    }),
  },
}));

// ----------------------------------------------------------------------

export default function AppLayout() {
  const { collapseClick, isCollapse } = useCollapseDrawer();

  const isDesktop = useResponsive("up", "lg");

  const [open, setOpen] = useState(false);

  if (true) {
    return (
      <>
        <Stack direction="column" alignItems="left">
          <Stack
            direction="row"
            alignItems="left"
            justifyContent="space-between"
          >
            <IconButton
              onClick={() => setOpen(true)}
              sx={{ mr: 1, color: "text.primary" }}
            >
              <Iconify icon="eva:menu-2-fill" />
            </IconButton>
          </Stack>

          <Stack direction="row" alignItems="top">
            <NavbarVertical
              isOpenSidebar={open}
              onCloseSidebar={() => setOpen(false)}
            />
            <Box
              component="main"
              sx={{
                px: { lg: 2 },
                pt: {
                  xs: `${HEADER.MOBILE_HEIGHT + 24}px`,
                  lg: `${HEADER.DASHBOARD_DESKTOP_HEIGHT + 80}px`,
                },
                pb: {
                  xs: `${HEADER.MOBILE_HEIGHT + 24}px`,
                  lg: `${HEADER.DASHBOARD_DESKTOP_HEIGHT + 24}px`,
                },
              }}
            >
              <Outlet />
            </Box>
          </Stack>
        </Stack>
      </>
    );
  }

  return (
    <Box
      sx={{
        display: { lg: "flex" },
        minHeight: { lg: 1 },
      }}
    >
      <NavbarVertical
        isOpenSidebar={open}
        onCloseSidebar={() => setOpen(false)}
      />

      <MainStyle collapseClick={collapseClick}>
        <Outlet />
      </MainStyle>
    </Box>
  );
}
