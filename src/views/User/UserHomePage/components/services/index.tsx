import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface Service {
  name: string;
  image: string;
  from: string;
  media: string;
}
export default function ServiceCard(prop: Service) {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "#EEEEEE", marginTop: "20px" }}>
      <CardHeader
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
        subheader="September 14, 2016"
      />
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
        >
          <FavoriteIcon />
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
