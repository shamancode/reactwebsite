import { Heading } from "./Heading";
import React from "react";
import { UserList } from "./UserList";
import Navbar from "../components/Navbar/index";
import { ManagerContainer } from "../components/ManagerElements";
import Footer from "./Footer/";
import Services from "./Services/index2";

export const Manager = () => {
  return (
    <>
      <ManagerContainer>
        <Navbar />
        <div
          style={{
            maxWidth: "60rem",
            margin: "4rem auto",
          }}
        >
          <Heading />

          <UserList />
        </div>
        <Services />

        <Footer />
      </ManagerContainer>
    </>
  );
};
