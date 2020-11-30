import React from "react";
import ImportCSV from "../components/ImportCSV";
import Demo from "../components/QRCode";
import Navbar from "../components/Navbar";

const ImportCSVPage = () => {
  return (
    <>
      <Navbar />

      <ImportCSV />

      <Demo />
    </>
  );
};
export default ImportCSVPage;
