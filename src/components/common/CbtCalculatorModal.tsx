import React, { useState } from 'react';

interface CbtCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CbtCalculatorModal: React.FC<CbtCalculatorModalProps> = ({ isOpen, onClose }) => {
  const [display, setDisplay] = useState<string>('0');
  const [prevVal, setPrevVal] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForNewInput, setWaitingForNewInput] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleDigit = (digit: string) => {
    if (waitingForNewInput || display === '0') {
      setDisplay(digit);
      setWaitingForNewInput(false);
    } else {
      setDisplay(display + digit);
    }
  };

  const handleDecimal = () => {
    if (waitingForNewInput) {
      setDisplay('0.');
      setWaitingForNewInput(false);
      return;
    }
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setPrevVal(null);
    setOperator(null);
    setWaitingForNewInput(false);
  };

  const handleBackspace = () => {
    if (waitingForNewInput) return;
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  const handleOperator = (op: string) => {
    const currentNum = parseFloat(display);
    if (prevVal === null) {
      setPrevVal(currentNum);
    } else if (operator) {
      const result = calculate(prevVal, currentNum, operator);
      setDisplay(String(result));
      setPrevVal(result);
    }
    setOperator(op);
    setWaitingForNewInput(true);
  };

  const calculate = (a: number, b: number, op: string): number => {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '×': return a * b;
      case '÷': return b !== 0 ? a / b : 0;
      default: return b;
    }
  };

  const handleEquals = () => {
    if (prevVal !== null && operator) {
      const currentNum = parseFloat(display);
      const result = calculate(prevVal, currentNum, operator);
      setDisplay(String(result));
      setPrevVal(null);
      setOperator(null);
      setWaitingForNewInput(true);
    }
  };

  const handleSquareRoot = () => {
    const num = parseFloat(display);
    if (num >= 0) {
      setDisplay(String(Math.sqrt(num)));
      setWaitingForNewInput(true);
    }
  };

  const handleSquare = () => {
    const num = parseFloat(display);
    setDisplay(String(num * num));
    setWaitingForNewInput(true);
  };

  const handleToggleSign = () => {
    const num = parseFloat(display);
    setDisplay(String(-num));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in font-sans">
      <div className="w-full max-w-xs bg-white rounded-[20px] shadow-floating overflow-hidden border border-[#E4EAE8]">
        {/* Header */}
        <div className="bg-[#004D40] text-white px-4 py-3 flex items-center justify-between shadow-subtle">
          <div className="flex items-center space-x-2">
            <span className="text-lg">🧮</span>
            <span className="text-[14px] font-bold">JAMB / CBT Calculator</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Display */}
        <div className="bg-[#F1F5F4] p-4 text-right border-b border-[#E4EAE8]">
          <div className="text-[11px] text-[#66736F] h-4">
            {prevVal !== null && operator ? `${prevVal} ${operator}` : ''}
          </div>
          <div className="text-2xl font-mono font-bold text-[#10201D] truncate">
            {display}
          </div>
        </div>

        {/* Keypad */}
        <div className="p-3 grid grid-cols-4 gap-2 bg-white">
          <button
            type="button"
            onClick={handleClear}
            className="p-3 rounded-[12px] bg-rose-50 text-rose-700 font-bold text-sm hover:bg-rose-100 transition cursor-pointer"
          >
            C
          </button>
          <button
            type="button"
            onClick={handleBackspace}
            className="p-3 rounded-[12px] bg-[#F7F9F8] text-[#10201D] font-bold text-sm hover:bg-[#E4EAE8] transition cursor-pointer"
          >
            ⌫
          </button>
          <button
            type="button"
            onClick={handleSquareRoot}
            className="p-3 rounded-[12px] bg-[#F7F9F8] text-[#10201D] font-bold text-sm hover:bg-[#E4EAE8] transition cursor-pointer"
          >
            √
          </button>
          <button
            type="button"
            onClick={() => handleOperator('÷')}
            className="p-3 rounded-[12px] bg-[#E8F5E9] text-[#004D40] font-bold text-sm hover:bg-emerald-100 transition cursor-pointer"
          >
            ÷
          </button>

          <button
            type="button"
            onClick={() => handleDigit('7')}
            className="p-3 rounded-[12px] bg-[#F7F9F8] text-[#10201D] font-bold text-base hover:bg-white border border-[#E4EAE8] transition cursor-pointer"
          >
            7
          </button>
          <button
            type="button"
            onClick={() => handleDigit('8')}
            className="p-3 rounded-[12px] bg-[#F7F9F8] text-[#10201D] font-bold text-base hover:bg-white border border-[#E4EAE8] transition cursor-pointer"
          >
            8
          </button>
          <button
            type="button"
            onClick={() => handleDigit('9')}
            className="p-3 rounded-[12px] bg-[#F7F9F8] text-[#10201D] font-bold text-base hover:bg-white border border-[#E4EAE8] transition cursor-pointer"
          >
            9
          </button>
          <button
            type="button"
            onClick={() => handleOperator('×')}
            className="p-3 rounded-[12px] bg-[#E8F5E9] text-[#004D40] font-bold text-sm hover:bg-emerald-100 transition cursor-pointer"
          >
            ×
          </button>

          <button
            type="button"
            onClick={() => handleDigit('4')}
            className="p-3 rounded-[12px] bg-[#F7F9F8] text-[#10201D] font-bold text-base hover:bg-white border border-[#E4EAE8] transition cursor-pointer"
          >
            4
          </button>
          <button
            type="button"
            onClick={() => handleDigit('5')}
            className="p-3 rounded-[12px] bg-[#F7F9F8] text-[#10201D] font-bold text-base hover:bg-white border border-[#E4EAE8] transition cursor-pointer"
          >
            5
          </button>
          <button
            type="button"
            onClick={() => handleDigit('6')}
            className="p-3 rounded-[12px] bg-[#F7F9F8] text-[#10201D] font-bold text-base hover:bg-white border border-[#E4EAE8] transition cursor-pointer"
          >
            6
          </button>
          <button
            type="button"
            onClick={() => handleOperator('-')}
            className="p-3 rounded-[12px] bg-[#E8F5E9] text-[#004D40] font-bold text-sm hover:bg-emerald-100 transition cursor-pointer"
          >
            -
          </button>

          <button
            type="button"
            onClick={() => handleDigit('1')}
            className="p-3 rounded-[12px] bg-[#F7F9F8] text-[#10201D] font-bold text-base hover:bg-white border border-[#E4EAE8] transition cursor-pointer"
          >
            1
          </button>
          <button
            type="button"
            onClick={() => handleDigit('2')}
            className="p-3 rounded-[12px] bg-[#F7F9F8] text-[#10201D] font-bold text-base hover:bg-white border border-[#E4EAE8] transition cursor-pointer"
          >
            2
          </button>
          <button
            type="button"
            onClick={() => handleDigit('3')}
            className="p-3 rounded-[12px] bg-[#F7F9F8] text-[#10201D] font-bold text-base hover:bg-white border border-[#E4EAE8] transition cursor-pointer"
          >
            3
          </button>
          <button
            type="button"
            onClick={() => handleOperator('+')}
            className="p-3 rounded-[12px] bg-[#E8F5E9] text-[#004D40] font-bold text-sm hover:bg-emerald-100 transition cursor-pointer"
          >
            +
          </button>

          <button
            type="button"
            onClick={handleToggleSign}
            className="p-3 rounded-[12px] bg-[#F7F9F8] text-[#10201D] font-bold text-sm hover:bg-[#E4EAE8] transition cursor-pointer"
          >
            ±
          </button>
          <button
            type="button"
            onClick={() => handleDigit('0')}
            className="p-3 rounded-[12px] bg-[#F7F9F8] text-[#10201D] font-bold text-base hover:bg-white border border-[#E4EAE8] transition cursor-pointer"
          >
            0
          </button>
          <button
            type="button"
            onClick={handleDecimal}
            className="p-3 rounded-[12px] bg-[#F7F9F8] text-[#10201D] font-bold text-base hover:bg-white border border-[#E4EAE8] transition cursor-pointer"
          >
            .
          </button>
          <button
            type="button"
            onClick={handleEquals}
            className="p-3 rounded-[12px] bg-[#004D40] text-[#FFD600] font-bold text-base hover:bg-[#003B32] transition cursor-pointer shadow-xs"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};
