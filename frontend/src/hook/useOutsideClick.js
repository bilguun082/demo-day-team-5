import { useRef, useEffect } from "react";

export const useOutsideClick = (callback) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      console.log(ref.current);
      if (ref.current && !ref.current.contains(event.target)) {
        callback()();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref]);

  return ref;
};
