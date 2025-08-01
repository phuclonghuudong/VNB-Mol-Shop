const Text = ({ title, isUppercase }) => {
  return (
    <p className={` text-lg font-bold py-3 ${isUppercase ? "uppercase" : ""}`}>
      {title}
    </p>
  );
};

export default Text;
