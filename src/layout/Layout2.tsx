import Header from "./header/Header";
import { ToastContainer } from "react-toastify";
import Header2 from "./header/Header2";
import { ModalProvider } from "src/contexts/modal-context/modal-context";
import { ThemeCustomProvider } from "src/contexts/theme-context/theme-context";

type Props = {
  children: React.ReactNode;
};
export default function Layout2({ children }: Props) {
  return (
    <ModalProvider>
      <ThemeCustomProvider>
        <div style={{ width: "100%", minHeight: "100vh" }}>
          {children}
          <ToastContainer
            position="top-center"
            autoClose={3000}
            theme="light"
            style={{ width: "max-content", minWidth: "220px", maxWidth: "90%" }}
            pauseOnHover={true}
          />
        </div>
      </ThemeCustomProvider>
    </ModalProvider>
  );
}
