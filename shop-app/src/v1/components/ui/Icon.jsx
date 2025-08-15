const Icon = ({ icon: ICON, isSize, isColor }) => {
  return (
    <>
      <ICON
        size={isSize || 20}
        className="hover:text-orange-900 text-orange-600"
      />
    </>
  );
};

export default Icon;
