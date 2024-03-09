import {
  Box,
  Grid,
  InputAdornment,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { addDays, subDays } from "date-fns-jalali";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import { useMatchesListAPI } from "./RQHooks/useMatchesListAPI";
import Loading from "../../Loading";
import LeaguesCard from "../../MatchesComponents/LeaguesCard";
import withErrorHandler from "../../../withErrorHandler";

const MatchesPage = withErrorHandler(({ throwError }) => {
  const [value, setValue] = React.useState(1);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  function formatDate(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }
  const generateTabsDay = () => {
    const today = new Date();
    const yesterday = subDays(today, 1);
    const tomorrow = addDays(today, 1);
    const dayAfterTomorrow = addDays(today, 2);

    return [
      formatDate(yesterday),
      formatDate(today),
      formatDate(tomorrow),
      formatDate(dayAfterTomorrow),
    ];
  };
  const { data, isLoading, isError } = useMatchesListAPI(
    generateTabsDay()[value]
  );
  if (isError) {
    return throwError();
  }

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        sx={(theme) => ({
          position: "sticky",
          top: 0,
          paddingBottom: "16px",
          zIndex: 10,
          backgroundColor: theme.palette.background.paper,
        })}
      >
        <Grid item>
          <Typography variant="h5">نتایج زنده</Typography>
        </Grid>
        <Grid item>
          <FaRegClock size={36} />
        </Grid>
        <Grid item xs={12} mt={2}>
          <TextField
            size="small"
            fullWidth
            placeholder="جستجو..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <CiSearch />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label="دیروز" />
        <Tab label="امروز" />
        <Tab label="فردا" />
        <Tab label={generateTabsDay()[3]} />
      </Tabs>

      <Box className="pt-10 overflow-auto">
        {data?.all?.map((league) => (
          <LeaguesCard data={league} />
        ))}
      </Box>
    </div>
  );
});

export default MatchesPage;
