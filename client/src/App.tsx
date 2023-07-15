import CreateAWorkSpace from "./components/CreateAWorkSpace";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Workspaces from "./components/Workspaces";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";
import axios from "axios";

function App() {

  axios.defaults.baseURL = 'http://localhost:8000';
  axios.defaults.withCredentials = true;

  return (
    <UserContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Workspaces />
              </>
            }
          />
          <Route path="/create-a-workspace/" element={<CreateAWorkSpace />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
