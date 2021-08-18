export const Input = ({ size }) => {
  const InputStyle = {
    inputStyle: `h-full w-full px-3 bg-black border-2 rounded-lg border-white border-opacity-50 outline-none focus:border-blue-500 focus:text-white transition duration-200`,
    small: `text-lg`,
    large: `text-2xl`,
    medium: `text-xl`,
    extraLarge: `text-4xl`,

    spanL: ``,
  };
  let Size, spanSize;
  if (size === "small") {
    Size = InputStyle.small;
  } else if (size === "large") {
    Size = InputStyle.large;
    spanSize =
      "input-text-l text-2xl text-white text-opacity-80 absolute left-0 top-0 mx-2 px-2 transition duration-200 ";
  } else if (size === "medium") {
    Size = InputStyle.medium;
  } else if (size === "extra-large") {
    Size = InputStyle.extraLarge;
    spanSize =
      "input-text-xl text-4xl text-white text-opacity-80 absolute left-0 top-0 mx-2 px-2 transition duration-200";
  }
  return (
    <label className="relative">
      <input type="text" className={`${InputStyle.inputStyle} ${Size}`} />
      <span className={`${spanSize}`}>Input</span>
    </label>
  );
};
