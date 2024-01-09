import useLocalStorage from "use-local-storage";
import "./index.css";
import Calculator from "./components/Calculator";
import Header from "./components/Header";

function App() {
  const [currentTheme, setCurrentTheme] = useLocalStorage("1", "");

  const handleThemeChange = () => {
    setCurrentTheme((prevTheme) => {
      switch (prevTheme) {
        case "1":
          return "2";
        case "2":
          return "3";
        case "3":
          return "1";
        default:
          return "1";
      }
    });
  };
  return (
    <>
      <div
        className="w-full h-screen mx-auto p-4   bg-[var(--mainBg)] font-body flex items-center justify-center"
        data-theme={currentTheme}
      >
        <div className="max-w-[760px] md:px-0 px-6">
          <Header
            handleThemeChange={handleThemeChange}
            currentTheme={currentTheme}
          />
          <Calculator />
        </div>
      </div>
    </>
  );
}

export default App;
