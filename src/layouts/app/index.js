import { useState } from "react";
import { Outlet } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Container, IconButton, Stack } from "@mui/material";
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

  return (
    <>
      {/* <Stack direction="row" >
        <NavbarVertical
              isOpenSidebar={open}
              onCloseSidebar={() => setOpen(false)}
            />
        <Outlet />
        </Stack> */}
      <Stack direction="column">
        <Stack
          direction="row"

          // justifyContent="space-between"
        >
          <IconButton
            onClick={() => setOpen(true)}
            sx={{ mr: 1, color: "text.primary" }}
          >
            <Iconify icon="eva:menu-2-fill" />
          </IconButton>
        </Stack>

        <Stack direction="row">
          <NavbarVertical
            isOpenSidebar={open}
            onCloseSidebar={() => setOpen(false)}
          />
          <Container>
            <Box
              component="main"
              width={"lg"}
              sx={{
                px: { lg: 2 },
              }}
            >
              <Outlet />
            </Box>
          </Container>
        </Stack>
      </Stack>
    </>
  );
}
