import { useEffect, useState } from "react";

const useDebounce = (value, delay = 400) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [value, delay]);
  return debouncedValue;
};

export default useDebounce;
