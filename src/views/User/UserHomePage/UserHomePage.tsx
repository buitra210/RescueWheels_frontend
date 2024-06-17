import { Box, Stack } from "@mui/material";
import Layout from "src/layout/Layout";
import ServiceCard from "./components/services";
import SwipeableTextMobileStepper from "./components/slider";
import FeatureBar from "./components/featureBar";
import axios from "axios";

interface Service {
  serviceName: string;
  serviceDescription: string;
  fromProviderId: string;
}

const serverUrl = " http://localhost:3055";

export default function UserHomePage() {
  const getServiceByQuantity = async (p: number) => {
    const s = await axios.get(serverUrl + `/getServiceByQuantity/10?${p}`);
    console.log(s.data);
    return s;
  };
  const providerId = "60c72b2f5f1b2c001c8d4e58";

  getServiceByQuantity(0).then();

  const services: Service[] = [
    {
      serviceName: "sua xe may",
      serviceDescription: "sua xe may",
      fromProviderId: providerId,
    },
    {
      serviceName: "sua xe may",
      serviceDescription: "sua xe may",
      fromProviderId: providerId,
    },
    {
      serviceName: "sua xe may",
      serviceDescription: "sua xe may",
      fromProviderId: providerId,
    },
    {
      serviceName: "sua xe may",
      serviceDescription: "sua xe may",
      fromProviderId: providerId,
    },
    {
      serviceName: "sua xe may",
      serviceDescription: "sua xe may",
      fromProviderId: providerId,
    },
    {
      serviceName: "sua xe may",
      serviceDescription: "sua xe may",
      fromProviderId: providerId,
    },
    {
      serviceName: "sua xe may",
      serviceDescription: "sua xe may",
      fromProviderId: providerId,
    },
    {
      serviceName: "sua xe may",
      serviceDescription: "sua xe may",
      fromProviderId: providerId,
    },
  ];
  return (
    <Layout>
      <Box sx={{ paddingTop: "100px" }}>
        <Stack direction="column">
          <SwipeableTextMobileStepper />
          <FeatureBar />
          <Stack direction="row" flexWrap="wrap" sx={{ paddingLeft: "30px" }}>
            {services?.map((item) => (
              <Box sx={{ display: "flex", mx: 1 }}>
                <ServiceCard {...item}></ServiceCard>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Box>
    </Layout>
  );
}
