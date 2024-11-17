import { useState, useCallback, useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";

function Passwordgen() {
  const [length, setlength] = useState(9);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [characterAllowed, setcharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurstuvwxyz";

    if (numberAllowed) charset += "0123456789";
    if (characterAllowed) charset += "!@#$%^&*()<>?{}[]";

    for (let i = 1; i <= length; i++) {
      let randomindex = Math.floor(Math.random() * charset.length);
      pass += charset.charAt(randomindex);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  const PasswordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    PasswordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, characterAllowed, numberAllowed, passwordGenerator]);

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      <main className="absolute inset-0 z-0">
        <Spline
          className="w-full h-full"
          scene="https://prod.spline.design/aEMWhi26fdZIME-g/scene.splinecode"
        />
      </main>

      <div className="content relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-8">
        <h1 className="text-4xl font-courgette md:text-6xl text-center text-white mb-16 md:mb-36 mt-8 md:mt-16">
          Generator your own{" "}
          <span className="text-pink-500 font-permanent">Passwords</span>{" "}
        </h1>

        <div
          className="backdrop-blur-sm font-courgette bg-fuchsia-900/70 text-white font-medium rounded-xl
          shadow-lg shadow-fuchsia-500/30 overflow-hidden flex flex-col w-full max-w-2xl mx-auto p-6 md:p-8"
        >
          <h2 className="mb-4 text-xl md:text-2xl font-semibold">
            Your Password is:
          </h2>

          {/* Password Input and Copy Button */}
          <div className="flex flex-col md:flex-row gap-3 mb-6">
            <input
              type="text"
              value={password}
              className="outline-none font-medium text-lg md:text-xl py-2 px-4 w-full rounded-lg text-black"
              placeholder="Password..........."
              readOnly
              ref={PasswordRef}
            />
            <button
              onClick={copyPasswordToClipboard}
              className="bg-green-700 outline-none rounded-lg px-6 py-2 text-white font-medium 
                font-serif hover:bg-green-800 transition-all duration-300 hover:scale-105 border-2 
                md:w-auto w-full"
            >
              Copy
            </button>
          </div>

          {/* Controls Section */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:items-center">
            {/* Length Control */}
            <div className="flex flex-col gap-2 flex-1">
              <label className="text-base md:text-lg">Length: {length}</label>
              <input
                type="range"
                min={9}
                max={100}
                value={length}
                className="cursor-pointer w-full"
                onChange={(e) => setlength(e.target.value)}
              />
            </div>

            {/* Checkboxes */}
            <div className="flex flex-row md:flex-row gap-4 md:gap-6">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  defaultChecked={numberAllowed}
                  className="cursor-pointer w-4 h-4"
                  onChange={() => setnumberAllowed((prev) => !prev)}
                />
                <label className="text-base md:text-lg">Numbers</label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="cursor-pointer w-4 h-4"
                  defaultChecked={characterAllowed}
                  onChange={() => setcharacterAllowed((prev) => !prev)}
                />
                <label className="text-base md:text-lg">Characters</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Passwordgen;
