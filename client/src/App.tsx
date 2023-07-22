import CreateAWorkSpace from "./components/CreateAWorkSpace";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Workspaces from "./components/Workspaces";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";
import axios from "axios";
import Footer from "./components/Footer";
import { useState } from "react";
import Workspace from "./components/Workspace";

function App() {
  axios.defaults.baseURL = "http://localhost:8000";
  axios.defaults.withCredentials = true;

  const [workspace, setWorkspace] = useState(true);

  return (
    <UserContextProvider>
      <BrowserRouter>
        {workspace ? (
          <Workspace />
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                  </>
                }
              />
              <Route
                path="/user"
                element={
                  <>
                    <Hero />
                    <Workspaces />
                  </>
                }
              />
              <Route
                path="/create-a-workspace"
                element={<CreateAWorkSpace />}
              />
            </Routes>
            <Footer />
          </>
        )}
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;