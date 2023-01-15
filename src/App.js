import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import { Box, Grid, ThemeProvider, createTheme } from "@mui/material";
import ProjectMain from "./components/taskmain/ProjectMain";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Addproject from "./components/taskmain/addproject/Addproject";
import Sidebar from "./components/taskmain/Sidebar";
import Edittask from "./components/taskmain/edittask/Edittask";
import Addtask from "./components/taskmain/addtask/Addtask";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#001e4f",
      },
      secondary: {
        main: "#f44336",
      },
    },
  });
  return (
    <div className="App">
      <Header />
      <ThemeProvider theme={theme}>
        <Box>
          <Grid container>
            <Grid item xs={0} sm={2} md={2} lg={2}>
              <Sidebar />
            </Grid>
            <Grid item xs={12} sm={10} md={10} lg={10}>
              <BrowserRouter>
                <Routes>
                  <Route element={<Edittask />} path="/edittask" />

                  <Route element={<Addproject />} path="/createproject" />
                  <Route element={<Addtask />} path="/createtask" />
                  <Route element={<ProjectMain />} path="/" />
                </Routes>
              </BrowserRouter>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
