const IconComponent = ({ icon: ICON, isSize, onClick, title }) => {
  const commonClass =
    " cursor-pointer select-none hover:text-orange-600 duration-300 group-hover:text-orange-600";
  return onClick ? (
    <ICON
      size={isSize || 20}
      onClick={onClick}
      className={commonClass}
      title={title ? title : ""}
    />
  ) : (
    <ICON
      size={isSize || 20}
      className={commonClass}
      title={title ? title : ""}
    />
  );
};

export default IconComponent;
