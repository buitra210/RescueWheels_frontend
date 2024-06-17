import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";

interface Service {
  serviceName: string;
  serviceDescription: string;
  fromProviderId: string;
}
export default function ServiceCard(prop: Service) {
  const navigate = useNavigate();
  return (
    <Card sx={{ width: 345, marginTop: "20px" }}>
      <CardHeader
        sx={{
          textTransform: "uppercase",
          fontSize: "50px",
          fontWeight: "bold",
        }}
        avatar={<Avatar aria-label="recipe">R</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={prop.serviceName}
      ></CardHeader>

      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{ py: 2 }}>
          {prop.serviceDescription}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ pb: 2, justifyContent: "flex-end", display: "flex", pr: 3 }}
      >
        <Button
          variant="gradient"
          sx={{ display: "flex", alignItems: "center", px: 1 }}
          onClick={() => {
            navigate("/createrequest");
          }}
        >
          <IconButton sx={{ fontSize: "10px", padding: 0 }}>
            <AdsClickIcon />
          </IconButton>
          <Typography sx={{ fontSize: "15 px" }}>Add Request</Typography>
        </Button>
      </CardActions>
    </Card>
  );
}
