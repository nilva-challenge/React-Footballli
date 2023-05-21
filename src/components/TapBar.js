import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { format } from 'date-fns';
import { Data } from '../Datas';
import { Grid } from '@mui/material';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box sx={{ bgcolor: '#edf0cd', position: 'relative', top: "80px",height:"100vh"}}>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
            >
              {Data.all.map((league, leagueIndex) => (
                league.fixtures.map((fixture, fixtureIndex) => (
                  <Tab label={`${fixture.home.name} vs ${fixture.away.name}`} {...a11yProps(leagueIndex + fixtureIndex)} key={fixture.id} />
                ))
              ))}
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            {Data.all.flatMap((league) => league.fixtures).map((fixture,index) => (
              <TabPanel value={value} index={index} dir={theme.direction} key={fixture.id}>
                <Typography variant="h6" color="#fafafa" backgroundColor="#3a0000" gutterBottom>
                  {fixture.home.name} vs. {fixture.away.name}
                </Typography>
                <Typography variant="body1" color="#fafafa" backgroundColor="#00465e">
                  Date: {format(new Date(fixture.start_time), 'MMMM dd, yyyy - HH:mm')}
                </Typography>
                <Typography variant="body1" color="#fafafa" backgroundColor="#00465e">
                  Status: {fixture.status === 'FT' ? 'Full Time' : fixture.status === 'HT' ? 'Half Time' : 'Upcoming'}
                </Typography>
                <Typography variant="body1" color="#fafafa" backgroundColor="#00465e">
                  Score: {`${fixture.home_goals ?? '?'} - ${fixture.away_goals ?? '?'}`}
                </Typography>
              </TabPanel>
            ))}
          </SwipeableViews>
        </Box>
      </Grid>
    </Grid>
  );
}
    