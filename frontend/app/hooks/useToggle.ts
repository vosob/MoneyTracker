// import { useState } from "react";

// export const useToggle = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const open = () => setIsOpen(true);
//   const close = () => setIsOpen(false);
//   return [isOpen, open, close] as const;
// };

import { useState } from "react";

export const useToggle = <Payload = void>() => {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    payload?: Payload;
  }>({
    isOpen: false,
    payload: undefined,
  });
  const open = (payload?: Payload) => setModalState({ isOpen: true, payload });
  const close = () => setModalState({ isOpen: false, payload: undefined });
  return [modalState, open, close] as const;
};
