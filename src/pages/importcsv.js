import React from "react";
import ImportCSV from "../components/ImportCSV";
import Navbar from "../components/Navbar";
import Contacts from "../components/Contacts";
import { Button2 } from "../components/ButtonElements";
import { ManagerContainer } from "../components/ManagerElements";
import Footer from "../components/Footer/index";
import Services from "../components/Services/index2";

const ImportCSVPage = () => {
  return (
    <>
      <Navbar />

      <ManagerContainer>
        <br></br>
        <div className="col-md-8 offset-md-2 row">
          <Button2 to="/projects">← Return</Button2>
        </div>

        <div className="row"></div>
        <div className="col-md-8 offset-md-2">
          <br></br>{" "}
          <h1 className="text-light font-weight-bold">My Classroom</h1>
          <br></br>
          <Contacts />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Footer />
      </ManagerContainer>
    </>
  );
};

export default ImportCSVPage;
