import { Route, Router, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProjectsPage from "./Pages/ProjectsPage";
import WorkPage from "./Pages/WorkPage";
import Navigation from "./Components/Navigation";
import ToggleSwitch from "./Components/ToggleSwitch";
import IndividualBlog from "./Blog/IndividualBlog";

function App() {

  return (
    <>
    <Navigation />
        <ToggleSwitch/>
    <Routes>
      <Route exact path="/portfolio-project" element={<HomePage />}/>
      <Route exact path="/projects" element={<ProjectsPage />}/>
      <Route exact path="/work" element={<WorkPage />}/>
      <Route exact path="/portfolio-project/blog/:id" element={<IndividualBlog/>} />
    </Routes>
    </>
  );
}

export default App;
