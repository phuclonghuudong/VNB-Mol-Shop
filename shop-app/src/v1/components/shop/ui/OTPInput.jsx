const OTPInput = ({ data, setData, inputRef }) => {
  return (
    <div className="flex items-center gap-3 justify-between pt-4">
      {data.map((_, index) => {
        return (
          <input
            key={"opt" + index}
            ref={(ref) => {
              inputRef.current[index] = ref;
              return ref;
            }}
            autoFocus={index === 0 ? true : false}
            type="text"
            maxLength={1}
            value={data[index]}
            onChange={(e) => {
              const value = e.target.value;

              const newData = [...data];
              newData[index] = value;
              setData(newData);

              if (value && index < 5) {
                inputRef.current[index + 1].focus();
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Backspace" && !data[index] && index > 0) {
                inputRef.current[index - 1].focus();
              }
            }}
            onPaste={(e) => {
              const pasted = e.clipboardData
                .getData("text")
                .slice(0, 6)
                .split("");
              const newData = [...data];
              for (let i = 0; i < pasted.length; i++) {
                newData[i] = pasted[i];
              }
              setData(newData);
              if (pasted.length === 6) {
                onComplete && onComplete(pasted.join(""));
              }
            }}
            id="otp"
            className="text-center bg-gray-200 w-full max-w-16 p-2 border-none rounded outline-none focus:border-orange-200 font-semibold"
          />
        );
      })}
    </div>
  );
};

export default OTPInput;
