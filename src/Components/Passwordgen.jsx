import { useState, useCallback, useEffect, useRef } from "react";

function Passwordgen() {
  const [length, setlength] = useState(9);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [characterAllowed, setcharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useCallback--This allows us to isolate resource intensive functions so that they will not
  //  automatically run on every render.
  // The useCallback Hook only runs when one of its dependencies update.
  // This can improve performance.

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurstuvwxyz";

    if (numberAllowed) {
      charset += "0123456789";
    }

    if (characterAllowed) {
      charset += "!@#$%^&*()<>?{}[]";
    }

    for (let i = 1; i <= length; i++) {
      let randomindex = Math.floor(Math.random() * charset.length);
      pass += charset.charAt(randomindex);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  const PasswordRef = useRef(null);

  let copyPasswordToClipboard = useCallback(() => {
    PasswordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, characterAllowed, numberAllowed, passwordGenerator]);

  return (
    <>
      <h1 className="text-6xl font-serif text-center text-white mb-36 mt-16">
        Password Generator
      </h1>
      <div
        className="bg-fuchsia-900 text-white font-medium font-mono rounded-lg
       shadow shadow-yellow-50 overflow-hidden flex flex-col flex-wrap w-full px-2 py-2"
      >
        <h2 className="mb-2 text-2xl">Your Password is:</h2>

        <div className="flex gap-2">
          <input
            type="text"
            value={password}
            className="outline-none font-medium text-xl py-1 px-3 w-full rounded-lg text-black"
            placeholder="Password..........."
            readOnly
            ref={PasswordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-red-500 outline-none 
          rounded-lg p-2 text-white font-medium font-serif hover:scale-110 border-4"
          >
            Copy
          </button>
        </div>

        <div className="flex gap-1 mt-5">
          <input
            type="range"
            min={9}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setlength(e.target.value);
            }}
          />
          <label className="text-xl">Length:{length}</label>

          <div className="flex gap-1 ml-32">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              className="cursor-pointer"
              onChange={() => {
                setnumberAllowed((prevNumber) => !prevNumber);
              }}
            />
            <label className="text-xl">Numbers</label>
          </div>

          <div className="flex gap-1 ml-14">
            <input
              type="checkbox"
              className="cursor-pointer"
              defaultChecked={characterAllowed}
              onChange={() => {
                setcharacterAllowed((prevChar) => !prevChar);
              }}
            />
            <label className="text-xl">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Passwordgen;
