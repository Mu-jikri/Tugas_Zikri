import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages";
import Books from "./pages/books";
import Team from "./pages/team";
import Contact from "./pages/contact";
import LoginForm from "./components/shared/Login/login";
import RegisterForm from "./components/shared/Register/registe";

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
            <Route path="Login" element={<LoginForm />} />
            <Route path="Register" element={<RegisterForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
