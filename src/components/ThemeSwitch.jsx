import "../index.css";

// import { useState } from "react";

const ThemeSwitch = ({ currentTheme, handleThemeChange }) => {
  return (
    <div className="" data-theme={currentTheme}>
      <label className="cursor-pointer flex items-end gap-4">
        <div className="uppercase text-[var(--textHeader)] text-[12px]">
          Theme
        </div>
        <div className="flex flex-col">
          <div className="w-full text-[var(--textHeader)] flex justify-between px-[3px] text-[12px]">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <div className="relative">
            <input
              type="checkbox"
              className="hidden"
              onChange={handleThemeChange}
            />
            <div
              className={`w-[4.5rem] h-4 bg-[var(--togglePadBg)] rounded-full shadow-inner transition-background-color relative flex items-center px-1`}
            >
              <div
                className={`absolute w-3 h-3 bg-[var(--toggleBg)] rounded-full shadow transition-transform duration-300 ease-in-out transform ${
                  currentTheme === "1"
                    ? "translate-x-0"
                    : currentTheme === "2"
                    ? "translate-x-6"
                    : "translate-x-12"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default ThemeSwitch;
