import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from "@mui/icons-material";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: "0px",
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "unset",
  width: "90%",
}));

interface TabsProps {
  value: any;
}

const MatchCard = ({ value }: TabsProps) => {
  const [open, setOpen] = useState(true);
  return (
    <Card
      sx={{
        minWidth: 300,
        border: "1px solid rgba(211,211,211,0.6)",
        margin: "10px 0px",
        width: "94%",
      }}
    >
      <CardHeader
        dir="rtl"
        title={value.league.name}
        avatar={
          <Avatar
            sx={{ bgcolor: "#cccc", marginLeft: "16px" }}
            aria-label="recipe"
            src={value.league.logo}
          >
            {/* R */}
          </Avatar>
        }
        action={
          <IconButton
            onClick={() => setOpen(!open)}
            aria-label="expand"
            size="small"
            sx={{ marginTop: "4px" }}
          >
            {open ? <KeyboardArrowUpRounded /> : <KeyboardArrowDownRounded />}
          </IconButton>
        }
      ></CardHeader>
      <div style={{ backgroundColor: "rgba(211,211,211,0.4)" }}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <CardContent>
            {value.matches.map((match: any, index: any) => (
              <Container
                key={index}
                sx={{ height: 36, lineHeight: 2, margin: "20px 0px" }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Item
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      sx={{ bgcolor: "#cccc", margin: "0px 5px" }}
                      aria-label="recipe"
                      src={match.teams.home.logo}
                    ></Avatar>
                    {match.teams.home.name}
                  </Item>
                  {match.goals.home && match.goals.away ? (
                    <Item>
                      {match.goals.home} : {match.goals.away}
                    </Item>
                  ) : (
                    <Item>
                      {match.fixture.date.split("T")[1].split("+")[0]}
                    </Item>
                  )}
                  <Item
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    {match.teams.away.name}
                    <Avatar
                      sx={{ bgcolor: "#cccc", margin: "0px 5px" }}
                      aria-label="recipe"
                      src={match.teams.away.logo}
                    ></Avatar>
                  </Item>
                </Stack>
              </Container>
            ))}
          </CardContent>
        </Collapse>
      </div>
    </Card>
  );
};

export default MatchCard;
