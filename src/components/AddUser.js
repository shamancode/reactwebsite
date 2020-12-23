import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import React, { useState, useContext } from "react";
import { v4 as uuid } from "uuid";
import { GlobalContext } from "../context/GlobalState";
import { ManagerContainer } from "./ManagerElements";
import Navbar from "../components/Navbar/index";
import Footer from "./Footer/index2";

export const AddUser = () => {
  const [name, setName] = useState("");
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = () => {
    const newUser = {
      id: uuid(),
      name,
    };
    addUser(newUser);
    history.push("/projects");
  };

  const onChange = (e) => {
    setName(e.target.value);
  };

  return (
    <ManagerContainer>
      <Navbar />
      <div style={{ maxWidth: "60rem", margin: "4rem auto" }}>
        <Form onSubmit={onSubmit}>
          <FormGroup>
            <Label className="text-light">Add New Classroom</Label>
            <Input
              type="text"
              value={name}
              onChange={onChange}
              placeholder="Enter Name"
            ></Input>
          </FormGroup>
          <Button type="submit" className="btn btn-dark">
            Submit
          </Button>
          <Link to="/projects" className="btn btn-secondary ml-2">
            Cancel
          </Link>
        </Form>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </ManagerContainer>
  );
};
