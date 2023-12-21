import React from "react";
import { Container, Divider, ListItem, Stack, Typography } from "@mui/material";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";

const AboutPage = () => {
  return (
    <Container>
      <Typography variant="h1" fontSize="35px">About My Script Application</Typography>{" "}
      <Stack spacing={2} sx={{ display: "flex", justifyContent: "center" }}>
        <ListItem>
          {" "}
          <Typography variant="h6" mt={3}>
            <HistoryEduIcon />
            If you are a Developer: <br />
            You can use my website to storage codes , script and sources .
            <Divider />
            1. Register to the website <br />
            2. Upload a Codes and Scripts you want to storage in the website <br />
            3. View them anytime on "My Scripts"
          </Typography>
        </ListItem>

        <ListItem>
          {" "}
          <Typography variant="h6">
          <HistoryEduIcon />
            What scripts website used for?:
            <Divider />
            1. To save and edit scripts and link and view them anytime <br />
            2. To find intersting codes that will improve your developing skills <br />
            3. To Learn new developing skills and Languages
          </Typography>{" "}
        </ListItem>
      </Stack>
    </Container>
  );
};

export default AboutPage;
