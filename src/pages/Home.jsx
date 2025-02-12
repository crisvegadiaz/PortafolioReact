import { useAppContext } from "../components/AppContext";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Menu from "../components/Menu";
import { useEffect } from "react";

function Home() {
  const { state } = useAppContext();

  useEffect(() => {
    const rootElement = document.getElementById("root");

    if (rootElement) {
      if (state.theme) {
        rootElement.style.backgroundColor =
          "var(--dark-background)" || "#000000";
      } else {
        rootElement.style.backgroundColor = "var(--light-surface)" || "#FFFFFF";
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
