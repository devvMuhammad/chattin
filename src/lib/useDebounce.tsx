import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);
  return debouncedValue;
}