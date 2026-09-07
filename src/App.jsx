import { useState } from "react";

import "./App.css";

import Home from "./Components/Home";
import About from "./Pages/About";
import Submit from "./Pages/Submit";
import AR from "./Pages/AR";
import News from "./Pages/News";
import Contact from "./Pages/Contact";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";

const renderPage = (page, setPage) => {
  switch (page) {
    case "home":
      return <Home setPage={setPage}> </Home>;

    case "about":
      return <About setPage={setPage}></About>;

    case "submit":
      return <Submit setPage={setPage}> </Submit>;

    case "a&r development":
      return <AR setPage={setPage}></AR>;

    case "news":
      return <News setPage={setPage}></News>;

    case "contact":
      return <Contact setPage={setPage}></Contact>;

    default:
      return <Home setPage={setPage} />;
  }
};

const App = () => {
  const [page, setPage] = useState("home");

  return (
    <div>
      <NavBar page={page} setPage={setPage}></NavBar>

      {/* renderpage is called here to veiw each page content when clicked */}
      <div> {renderPage(page, setPage)}</div>

      <Footer setPage={setPage}></Footer>
    </div>
  );
};

export default App;
