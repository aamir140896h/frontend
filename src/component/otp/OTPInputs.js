import React, { useEffect, useRef, useState } from "react";

const OTPInputs = () => {
  const OTP_Digit = 6;
  const [inputArr, setInputArr] = useState(Array(OTP_Digit).fill(""));
  const inputRef = useRef([]);

  const handleInputChange = (value, index) => {
    if (isNaN(value)) return;
    console.log(value);

    const newArray = [...inputArr];
    // newArray[index] = value.slice(-1);
    newArray[index] = value;
    setInputArr(newArray);
    value && inputRef.current[index + 1]?.focus();
  };

  const handleKeyChange = (e, index) => {
    const isBackspace = e.key === "Backspace";
    const isEmpty = e.target.value === "";
    if (isBackspace && isEmpty && index > 0) {
      const prevInput = inputRef.current[index - 1];
      prevInput?.focus();
    }
  };
  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);
  return (
    <div style={{ textAlign: "center", gap: "10px" }}>
      <h1>OTP validate</h1>
      {inputArr.map((input, index) => (
        <input
          key={index}
          maxLength={1}
          ref={(input) => (inputRef.current[index] = input)}
          type="text"
          value={inputArr[index]}
          onChange={(e) => handleInputChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyChange(e, index)}
          style={{
            width: "40px",
            height: "40px",
            textAlign: "center",
            fontSize: "1.5rem",
            margin: "5px",
          }}
        />
      ))}
    </div>
  );
};

export default OTPInputs;
