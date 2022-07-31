import React from "react";
import { Helmet } from "react-helmet";
import Divider from "../components/Divider/Divider-component.tsx";
import Stack from "../components/Stack/Stack-component.tsx";

function Profile() {
  return (
    <>
      <Helmet>
        <title>پروفایل</title>
      </Helmet>
      <Stack alignment="center" direction="column">
        <Divider size={50} />
        <p>اطلاعاتی در دسترس نیست</p>
      </Stack>
    </>
  );
}

export default Profile;
