import { useAppContext } from "../components/AppContext";
import { colors } from "../js/themeDark.js";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Menu from "../components/Menu";
import { useEffect } from "react";
import "../style/footer.css";
import "../style/menu.css";
import "../style/main.css";
import "../style/responsive.css";

function Home() {
  const { state } = useAppContext();

  useEffect(() => {
    const rootElement = document.getElementById("root");

    if (rootElement) {
      if (state.theme) {
        rootElement.style.backgroundColor = colors.black || "#000000";
      } else {
        rootElement.style.backgroundColor = colors.white || "#FFFFFF";
      }
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
