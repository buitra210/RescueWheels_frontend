import Header from "./header/Header";
import { ToastContainer } from "react-toastify";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      <Header />
      {children}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="light"
        style={{ width: "max-content", minWidth: "220px", maxWidth: "90%" }}
        pauseOnHover={true}
      />
    </div>
  );
}
