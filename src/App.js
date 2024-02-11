import Router from "./routes";
import ThemeProvider from "./theme/theme";


function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
