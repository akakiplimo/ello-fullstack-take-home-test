import MainTeacherView from "./components/AppContainer.tsx";
import {ThemeProvider} from "@mui/material";
import theme from "./theme.ts";
import {ReadingListProvider} from "./context/ReadingListContext.tsx";
function App() {

  return (
    <ThemeProvider theme={theme}>
        <ReadingListProvider>
            <MainTeacherView />
        </ReadingListProvider>
    </ThemeProvider>
  )
}

export default App
