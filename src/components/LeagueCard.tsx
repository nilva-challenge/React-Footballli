import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue, red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { scoresListProps } from "./ScoresList";
import MatchItem from "./MatchItem";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

type leagueCardProps = {
  data: scoresListProps;
};
const LeagueCard = ({ data }: leagueCardProps) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card sx={{ maxWidth: 400, borderRadius:"8px !important", boxShadow:"0 4px 8px 0 rgba(0,0,0,0.08)" }}>
      <CardHeader
        avatar={<Avatar src={data.logo} sx={{ bgcolor: "white", height:30,width:30 }}></Avatar>}
        action={
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            sx={{
              marginTop: 0,
              marginBottom: 0,
            }}
          >
            <ExpandMoreIcon />
          </ExpandMore>
        }
        className="border-b"
        sx={{
          "& .MuiCardHeader-title": {
            borderRadius: "1px",
            textAlign: "left",
            color: blue[600],
            fontWeight: "bold",
          },
        }}
        title={data.name}
      />

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ padding: 0}} className="!pt-4 !pb-0">
          {data.fixtures?.map((item) => (
            <MatchItem data={item} />
          ))}
        </CardContent>
      </Collapse>
    </Card>
  );
};
export default LeagueCard;
