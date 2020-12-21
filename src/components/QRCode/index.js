import React, { useState } from "react";
import { QRCode } from "react-qr-svg";
import { v4 as uuidv4 } from "uuid";

const Demo = () => {
  return (
    <QRCode
      align="center"
      bgColor="#FFFFFF"
      fgColor="#000000"
      level="Q"
      style={{ width: 64 }}
      value={uuidv4()}
    />
  );
};

export default Demo;
