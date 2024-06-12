import { Box, Stack } from "@mui/material";
import Layout from "src/layout/Layout";
import ServiceCard from "./components/services";
import SwipeableTextMobileStepper from "./components/slider";
import FeatureBar from "./components/featureBar";
import axios from "axios"

interface Service {
  name: string;
  image: string;
  from: string;
  media: string;
}

const serverUrl = " http://localhost:3055"

export default function UserHomePage() {
  const getServiceByQuantity = async (p: number) => {
      const s = await axios.get(serverUrl + `/getServiceByQuantity/10?${p}`)
      console.log(s.data)
      return s
  }

  getServiceByQuantity(0).then()

  const services: Service[] = [
    {
      name: "sua xe may",
      image:
        "https://media.vneconomy.vn/images/upload/2021/04/20/elantra-sport-2019-1615220509482378120754-0-0-1079-1920-crop-16152205134791452801253.jpg",
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
      <Box sx={{ paddingTop: "100px" }}>
        <Stack direction="column">
          <SwipeableTextMobileStepper />
          <FeatureBar />
          <Stack
            direction="row"
            flexWrap="wrap"
            sx={{ paddingLeft: "30px", backgroundColor: "#222222" }}
          >
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
        </Stack>
      </Box>
    </Layout>
  );
}
