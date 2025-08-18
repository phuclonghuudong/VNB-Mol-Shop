const ToastLoading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xs bg-black/10 z-[9999]">
      <div className="w-16 h-16 border-4 border-t-transparent border-orange-700 rounded-full animate-spin"></div>
    </div>
  );
};

export default ToastLoading;
