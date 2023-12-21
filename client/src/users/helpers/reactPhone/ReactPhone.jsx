import React, { forwardRef, useState } from "react";

import PhoneInput from "react-phone-number-input";
import "./reactPhone.css";

const ReactPhone = ({ onChange, data, name }) => {
  return (
    <>
      <PhoneInput onChange={onChange} />
    </>
  );
};

export default ReactPhone;
