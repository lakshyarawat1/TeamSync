import CreateAWorkSpace from "./components/CreateAWorkSpace"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Workspaces from "./components/Workspaces"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
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
  );
}

export default App
