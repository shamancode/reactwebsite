import React, { useState } from "react";
import { QRCode } from "react-qr-svg";

const Demo = () => {
  return (
    <QRCode
      align="center"
      bgColor="#FFFFFF"
      fgColor="#000000"
      level="Q"
      style={{ width: 256 }}
      value="some text"
    />
  );
};

export default Demo;
