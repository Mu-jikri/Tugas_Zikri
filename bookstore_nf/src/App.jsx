import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages";
import Books from "./pages/books";
import Team from "./pages/team";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="books" element={<Books />} />
            <Route path="team" element={<Team />} />
            <Route path="kontak" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
