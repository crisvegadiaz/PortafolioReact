import { useAppContext } from "../components/AppContext";
import { colors } from "../js/themeDark.js";
import { useEffect } from "react";
import "../style/menu.css";
import "../style/main.css";
import "../style/footer.css";
import "../style/responsive.css";
import Main from "../components/Main";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

function Home() {
  const { state } = useAppContext();

  useEffect(() => {
    const rootElement = document.getElementById("root");

    if (state.theme) {
      rootElement.style.backgroundColor = colors.black;
    } else {
      rootElement.style.backgroundColor = colors.white;
    }
  }, [state.theme]);

  return (
    <>
      <Menu />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
