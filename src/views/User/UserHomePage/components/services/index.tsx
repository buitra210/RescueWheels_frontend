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

interface Service {
  name: string;
  image: string;
  from: string;
  media: string;
}
export default function ServiceCard(prop: Service) {
  const navigate = useNavigate();
  return (
    <Card sx={{ width: 345, backgroundColor: "#EEEEEE", marginTop: "20px" }}>
      <CardHeader
        sx={{
          color: "black",
          textTransform: "uppercase",
          fontSize: "50px",
          fontWeight: "bold",
        }}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton
            aria-label="settings"
            sx={{
              color: "black",
            }}
          >
            <MoreVertIcon />
          </IconButton>
        }
        title={prop.name}
      ></CardHeader>

      <CardMedia
        component="img"
        height="194"
        image={prop.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {prop.from}
        </Typography>
        <Typography>{prop.media}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          sx={{
            color: "black",
          }}
          onClick={() => {
            navigate("/createrequest");
          }}
        >
          <AdsClickIcon />
        </IconButton>
        <IconButton
          aria-label="share"
          sx={{
            color: "black",
          }}
        >
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
