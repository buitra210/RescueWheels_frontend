import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: "https://vnn-imgs-f.vgcloud.vn/2019/05/01/14/xe-cuu-ho.jpg",
  },
  {
    label: "Bird",
    imgPath:
      "https://911workshop.vn/wp-content/uploads/2022/06/gara-chuyen-sua-xe-lexus-ha-noi.jpg",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://vinahoangan.vn/wp-content/uploads/2023/05/dich-vu-sua-xe-cuu-ho.jpg",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://giahoacorp.com.vn/wp-content/uploads/2021/04/dich-vu-cuu-ho-e1491360898391.png",
  },
];

function SwipeableTextMobileStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: "100%", flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                sx={{
                  height: 500,
                  display: "block",
                  overflow: "hidden",
                  width: "89%",
                  objectFit: "cover",
                  marginLeft: "60px",
                }}
                src={step.imgPath}
                alt={step.label}
              >
                <div
                  style={{
                    height: 600,
                    display: "block",
                    overflow: "hidden",
                    width: "100%",
                  }}
                >
                  <img
                    src={step.imgPath}
                    alt={step.label}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default SwipeableTextMobileStepper;
