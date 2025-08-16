const IconComponent = ({ icon: ICON, isSize, onClick }) => {
  const commonClass =
    " cursor-pointer select-none hover:text-orange-600 duration-300";
  return onClick ? (
    <ICON size={isSize || 20} onClick={onClick} className={commonClass} />
  ) : (
    <ICON size={isSize || 20} className={commonClass} />
  );
};

export default IconComponent;
