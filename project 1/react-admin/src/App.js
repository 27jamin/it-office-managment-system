import { ColorModeContext, useMode } from "./theme";
import { CssBaseline , ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scences/global/TopBar";
import SideBar from "./scences/global/SideBar";
import Dashboard from "./scences/dashBoard";
import Team from "./scences/team";
import Contacts from "./scences/contacts";
import Invoice from "./scences/invoices";
import Form from "./scences/form";
import Calendar from "./scences/calendar";
import FAQ from "./scences/faq";
import Bar from "./scences/bar";
import Pie from "./scences/pie";
import Line from "./scences/line";
import GeoGraphy from "./scences/geography.jsx";
import Chat from "./scences/chat";
import Login from "./Login";


function App() {

  const [ theme, colorMode ] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/invoices" element={<Invoice />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<GeoGraphy />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
