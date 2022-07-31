import React from "react";
import { Helmet } from "react-helmet";
import Divider from "../components/Divider/Divider-component.tsx";
import Stack from "../components/Stack/Stack-component.tsx";

function Discovery() {
  return (
    <>
      <Helmet>
        <title>اکتشافات</title>
      </Helmet>
      <Stack alignment="center" direction="column">
        <Divider size={50} />
        <p>اطلاعاتی در دسترس نیست</p>
      </Stack>
    </>
  );
}

export default Discovery;
