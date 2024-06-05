import { Box, Grid, Stack } from "@mui/material";
import Layout from "src/layout/Layout";
import ServiceCard from "./components/services";

interface Service {
  name: string;
  image: string;
  from: string;
  media: string;
}
export default function UserHomePage() {
  const services: Service[] = [
    {
      name: "sua xe may",
      image: "",
      from: "",
      media: "",
    },
    {
      name: "sua xe may",
      image: "",
      from: "",
      media: "",
    },
    {
      name: "sua xe may",
      image: "",
      from: "",
      media: "",
    },
    {
      name: "sua xe may",
      image: "",
      from: "",
      media: "",
    },
    {
      name: "sua xe may",
      image: "",
      from: "",
      media: "",
    },
    {
      name: "sua xe may",
      image: "",
      from: "",
      media: "",
    },
    {
      name: "sua xe may",
      image: "",
      from: "",
      media: "",
    },
    {
      name: "sua xe may",
      image: "",
      from: "",
      media: "",
    },
  ];
  return (
    <Layout>
      <Box sx={{ paddingTop: "200px" }}>
        <Stack direction="row" flexWrap="wrap" sx={{ marginLeft: "30px" }}>
          {services?.map((item) => (
            <Box
              sx={{
                marginTop: "30px",
                marginLeft: "30px",
                marginRight: "10px",
              }}
            >
              <ServiceCard {...item}></ServiceCard>
            </Box>
          ))}
        </Stack>
      </Box>
    </Layout>
  );
}
