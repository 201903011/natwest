import { useContext } from "react";
import { CollapseDrawerContext } from "../context/collapse_drawer_context";

// ----------------------------------------------------------------------

const useCollapseDrawer = () => useContext(CollapseDrawerContext);

export default useCollapseDrawer;
