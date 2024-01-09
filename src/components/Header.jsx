import ThemeSwitch from "./ThemeSwitch";

const Header = ({ handleThemeChange, currentTheme }) => {
  return (
    <div className="flex w-full justify-between items-end">
      <div className="text-[var(--textHeader)] text-[16px]">calc</div>
      <ThemeSwitch
        handleThemeChange={handleThemeChange}
        currentTheme={currentTheme}
      />
    </div>
  );
};

export default Header;
