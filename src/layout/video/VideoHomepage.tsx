export default function VideoHomepage() {
  return (
    <video
      style={{
        height: "100vh",
        width: "98vw",
        position: "absolute",
        objectFit: "cover",
        zIndex: -1,
      }}
      autoPlay
      muted
      loop
      id="videoHomepage"
    >
      <source src="public/video/videohomepage.mp4" type="video/mp4" />
    </video>
  );
}
