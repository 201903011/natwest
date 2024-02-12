import { HelmetProvider } from "react-helmet-async";
import Router from "./routes";
import ThemeProvider from "./theme/theme";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
