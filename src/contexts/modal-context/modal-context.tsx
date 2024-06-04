import { createContext, ReactNode, useContext, useState } from "react";
import { Breakpoint, DialogProps } from "@mui/material";
import { title } from "process";
import { BaseContextProps } from "src/global-config";

type TOptions = {
  maxWidth: Breakpoint | "xsm";
};

interface IModalContext {
  open: boolean;
  title: string | ReactNode;
  content: ReactNode;
  modalProps?: Omit<DialogProps, "open">;
  openModal: (
    title: IModalContext["title"],
    content: IModalContext["content"],
    modalProps?: IModalContext["modalProps"]
  ) => void;
  closeModal: () => void;
}

const ModalDataContext = createContext<IModalContext>({} as IModalContext);

export function ModalProvider({ children }: BaseContextProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<ReactNode>("");
  const [content, setContent] = useState<ReactNode>(<></>);
  const [modalProps, setModalProps] = useState<
    Omit<DialogProps, "open"> | undefined
  >(undefined);

  const openModal = (
    title: IModalContext["title"],
    content: IModalContext["content"],
    modalProps?: IModalContext["modalProps"]
  ) => {
    setOpen(true);
    setTitle(title);
    setContent(content);
    setModalProps((prev) => {
      return {
        ...prev,
        ...modalProps,
      };
    });
  };
  const closeModal = () => {
    setOpen(false);
    setTitle("");
    setContent(<></>);
    setModalProps(undefined);
  };

  return (
    <ModalDataContext.Provider
      value={{ open, title, content, modalProps, openModal, closeModal }}
    >
      {children}
    </ModalDataContext.Provider>
  );
}
export const useModalContext = () => useContext(ModalDataContext);
