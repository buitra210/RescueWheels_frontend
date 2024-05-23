import Content from "./content/Content";
import Header from "./header/Header";
import VideoHomepage from "./video/VideoHomepage";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      <Header />

      {children}
    </div>
  );
}
