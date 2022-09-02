import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "../page/About";
import { Blog } from "../page/Blog";
import { Home } from "../page/Home";
import { Schedules } from "../page/Schedules";


export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Routes>
        <Route path="/schedulesNew" element={<Schedules />} />
      </Routes>
    </Router>
  )
}
