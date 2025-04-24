import React, { useRef } from "react";

function TextInput() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Mau cari apa?  " />
      <button onClick={focusInput}>Cari</button>
    </div>
  );
}

export default TextInput;
