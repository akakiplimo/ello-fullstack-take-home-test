import MainTeacherView from "./components/MainTeacherView.tsx";
import {ThemeProvider} from "@mui/material";
import theme from "./theme.ts";
function App() {

  return (
    <ThemeProvider theme={theme}>
      <MainTeacherView />
    </ThemeProvider>
  )
}

export default App
