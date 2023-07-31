import RoutesApp from "./routes/RoutesApp";
import ThemeProvider from "./components/ThemeProvider";

function App() {

  return (
    <ThemeProvider>
      <RoutesApp />
    </ThemeProvider>
  )
}

export default App;
