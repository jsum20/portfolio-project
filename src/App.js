import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import BlogPage from "./Pages/BlogPage";
import EducationPage from "./Pages/EducationPage";
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
      <Route exact path="/" element={<HomePage />}/>
      <Route exact path="/about" element={<AboutPage />}/>
      <Route exact path="/education" element={<EducationPage />}/>
      <Route exact path="/work" element={<WorkPage />}/>
      <Route exact path="/blog" element={<BlogPage />}/>
      <Route exact path="/blog/:id" element={<IndividualBlog/>} />
    </Routes>
    </>
  );
}

export default App;
