// Calculator.js

import { useState } from "react";
import Button from "./Button";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const handleClear = () => {
    setInput("");
  };

  const handleDelete = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  return (
    <div className="mt-6 w-full">
      <input
        type="text"
        className="w-full mb-4 p-6 text-xl border bg-[var(--screenBg)] text-[var(--textScreen)] outline-none rounded border-none"
        value={input}
        readOnly
      />

      <div className="rounded-lg p-8 bg-[var(--screenBg)]">
        <div className="grid grid-cols-4 gap-4">
          <Button
            onClick={() => handleClick("7")}
            className="bg-[var(--normalBg)] h-[50px]"
          >
            <div
              className={`w-full rounded-md p-6 h-full text-[var(--textNormal)] flex items-center justify-center bg-[var(--normalShadow)]`}
            >
              7
            </div>
          </Button>
          <Button
            onClick={() => handleClick("8")}
            className="bg-[var(--normalBg)] h-[50px]"
          >
            <div
              className={`w-full rounded-md p-6 h-full text-[var(--textNormal)] flex items-center justify-center bg-[var(--normalShadow)]`}
            >
              8
            </div>
          </Button>
          <Button
            onClick={() => handleClick("9")}
            className="bg-[var(--normalBg)] h-[50px]"
          >
            <div
              className={`w-full rounded-md p-6 h-full flex items-center text-[var(--textNormal)]  justify-center bg-[var(--normalShadow)]`}
            >
              9
            </div>
          </Button>
          <Button
            onClick={handleDelete}
            className="bg-[var(--resetDelBg)] h-[50px]"
          >
            <div
              className={`w-full rounded-md p-6 h-full uppercase text-[var(--textResetDel)] flex items-center justify-center bg-[var(--resetDelShadow)]`}
            >
              Del
            </div>
          </Button>

          <Button
            onClick={() => handleClick("4")}
            className="bg-[var(--normalBg)] h-[50px]"
          >
            <div
              className={`w-full rounded-md p-6 h-full text-[var(--textNormal)] flex items-center justify-center bg-[var(--normalShadow)]`}
            >
              4
            </div>
          </Button>
          <Button
            onClick={() => handleClick("5")}
            className="bg-[var(--normalBg)] h-[50px]"
          >
            <div
              className={`w-full rounded-md p-6 h-full flex text-[var(--textNormal)] items-center justify-center bg-[var(--normalShadow)]`}
            >
              5
            </div>
          </Button>
          <Button
            onClick={() => handleClick("6")}
            className="bg-[var(--normalBg)] h-[50px]"
          >
            <div
              className={`w-full rounded-md p-6 h-full flex text-[var(--textNormal)] items-center justify-center bg-[var(--normalShadow)]`}
            >
              6
            </div>
          </Button>
          <Button
            onClick={() => handleClick("+")}
            className="bg-[var(--normalBg)] h-[50px]"
          >
            <div
              className={`w-full rounded-md p-6 h-full flex items-center text-[var(--textNormal)] justify-center bg-[var(--normalShadow)]`}
            >
              +
            </div>
          </Button>

          <Button
            onClick={() => handleClick("1")}
            className="bg-[var(--normalBg)] h-[50px]"
          >
            <div
              className={`w-full rounded-md p-6 h-full flex text-[var(--textNormal)] items-center justify-center bg-[var(--normalShadow)]`}
            >
              1
            </div>
          </Button>
          <Button
            onClick={() => handleClick("2")}
            className="bg-[var(--normalBg)] h-[50px]"
          >
            <div
              className={`w-full rounded-md p-6 h-full flex text-[var(--textNormal)] items-center justify-center bg-[var(--normalShadow)]`}
            >
              2
            </div>
          </Button>
          <Button
            onClick={() => handleClick("3")}
            className="bg-[var(--normalBg)] h-[50px]"
          >
            <div
              className={`w-full rounded-md p-6 h-full text-[var(--textNormal)] flex items-center justify-center bg-[var(--normalShadow)]`}
            >
              3
            </div>
          </Button>
          <Button
            onClick={() => handleClick("-")}
            className="bg-[var(--normalBg)] h-[50px]"
          >
            <div
              className={`w-full rounded-md p-6 h-full text-[var(--textNormal)] flex items-center justify-center bg-[var(--normalShadow)]`}
            >
              -
            </div>
          </Button>

          <Button
            onClick={() => handleClick(".")}
            className="bg-[var(--normalBg)] h-[50px]"
          >
            <div
              className={`w-full rounded-md p-6 h-full text-[var(--textNormal)] flex items-center justify-center bg-[var(--normalShadow)]`}
            >
              .
            </div>
          </Button>
          <Button
            onClick={() => handleClick("0")}
            className="bg-[var(--normalBg)] h-[50px]"
          >
            <div
              className={`w-full rounded-md p-6 h-full flex text-[var(--textNormal)] items-center justify-center bg-[var(--normalShadow)]`}
            >
              0
            </div>
          </Button>
          <Button
            onClick={() => handleClick("*")}
            className="bg-[var(--normalBg)] h-[50px]"
          >
            <div
              className={`w-full rounded-md p-6 h-full text-[var(--textNormal)] flex items-center justify-center bg-[var(--normalShadow)]`}
            >
              *
            </div>
          </Button>
          <Button
            onClick={() => handleClick("/")}
            className="bg-[var(--normalBg)] h-[50px]"
          >
            <div
              className={`w-full rounded-md p-6 h-full text-[var(--textNormal)] flex items-center justify-center bg-[var(--normalShadow)]`}
            >
              /
            </div>
          </Button>
        </div>

        <div className="grid grid-cols-2 mt-4 gap-4">
          <Button
            onClick={handleClear}
            className="bg-[var(--resetDelBg)] h-[50px]"
          >
            <div
              className={`w-full rounded-md p-4 h-full flex text-[var(--textResetDel)] items-center justify-center bg-[var(--resetDelShadow)] uppercase`}
            >
              Reset
            </div>
          </Button>
          <Button
            onClick={handleCalculate}
            className="bg-[var(--equalsShadow)] h-[50px]"
          >
            <div
              className={`w-full rounded-md p-4 h-full text-[var(--textEquals)] flex items-center justify-center bg-[var(--equalsBg)] uppercase `}
            >
              =
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
