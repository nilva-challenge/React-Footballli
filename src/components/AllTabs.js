import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import moment from "moment";
import React, { useState } from "react";

const AllTabs = ({ db, db2, sortedDates }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
      >
        {sortedDates.map((event, index) => {
          return (
            <Tab
              className="container"
              key={index}
              label={moment(event).subtract(10, "days").calendar()}
            >
              {db
                .filter((ele) => moment(ele.fixture.date).format("L") === event)
                .map((ele) => {
                  return (
                    <div key={ele.fixture.id}>Db: {ele.teams.away.name}</div>
                  );
                })}

              {db2
                .filter((ele) => moment(ele.fixture.date).format("L") === event)
                .map((ele) => {
                  return (
                    <div key={ele.fixture.id}>Db2: {ele.teams.away.name}</div>
                  );
                })}
            </Tab>
          );
        })}
      </Tabs>
    </Box>

    // <Tabs
    //   value={value}
    //   onChange={handleChange}
    //   variant="scrollable"
    //   scrollButtons={false}
    //   aria-label="scrollable prevent tabs example"
    // >

    //   {/* {db.map((event, index) => {
    //     return (
    //       <Tab
    //         key={event.fixture.id}
    //         eventKey={event.fixture.id}
    //         title={moment(event.fixture.date).subtract(10, "days").calendar()}
    //       >
    //         <span>
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos

    //         </span>
    //       </Tab>
    //     );
    //   })} */}

    //   {/* <Tab eventKey="profile" title="Profile">
    //     <span>Hi</span>
    //   </Tab> */}
    //   {/* <Tab eventKey="contact" title="Contact">
    //     <span>Hi</span>
    //   </Tab>
    //   <Tab eventKey="afrasaw" title="awarwswsf">
    //     <span>Hi</span>
    //   </Tab>
    //   <Tab eventKey="wawdwadad" title="adwadssd">
    //     <span>Hi</span>
    //   </Tab>
    //   <Tab eventKey="cwwontact" title="Coaantact">
    //     <span>Hi</span>
    //   </Tab>
    //   <Tab eventKey="coddddntact" title="Conddddtact">
    //     <span>Hi</span>
    //   </Tab>
    //   <Tab eventKey="contactss" title="Contassct">
    //     <span>Hi</span>
    //   </Tab>
    //   <Tab eventKey="contacaaat" title="Contaaaact">
    //     <span>Hi</span>
    //   </Tab> */}
    // </Tabs>
  );
};

export default AllTabs;
