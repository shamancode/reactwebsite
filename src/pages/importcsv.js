import React from "react";
import ImportCSV from "../components/ImportCSV";
import Demo from "../components/QRCode";
import Navbar from "../components/Navbar";
import Contacts from "../components/Contacts";

const ImportCSVPage = () => {
  return (
    <>
      <Navbar />

      <br></br>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <Contacts />
          <ImportCSV />
        </div>
      </div>
    </>
  );
};

export default ImportCSVPage;
