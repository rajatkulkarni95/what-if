import { Ref, useEffect } from "react";

export const useOnClickOutside = (
  ref: Ref<HTMLUListElement>,
  handler: Function
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const { current } = ref;
      // Do nothing if clicking ref's element or descendent elements
      if (!current || current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
