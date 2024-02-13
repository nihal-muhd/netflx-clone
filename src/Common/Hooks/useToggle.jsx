import { useEffect } from "react";

const useToggle = (expand, setExpand, ref) => {
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [expand]);
  const handleClick = (event) => {
    if (expand && ref.current && !ref.current.contains(event.target)) {
      setExpand(false);
    }
  };
};
export default useToggle;
