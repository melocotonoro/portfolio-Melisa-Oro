import { useState } from "react";

export const useModal = () => {
  const initialId = null;

  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState<string | null>(initialId);

  const handleOpenModal = (id: string) => {
    setIsOpen(true);
    setId(id);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
    setId(initialId);
  };

  return { isOpen, id, handleOpenModal, handleCloseModal };
};
