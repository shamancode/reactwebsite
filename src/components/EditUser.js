import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { ManagerContainer } from "./ManagerElements";
import Navbar from "../components/Navbar/index";
import Footer from "./Footer/index2";

export const EditUser = (props) => {
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
  });
  const { users, editUser } = useContext(GlobalContext);
  const history = useHistory();
  const currentUserId = props.match.params.id;

  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find((user) => user.id === userId);
    setSelectedUser(selectedUser);
  }, [currentUserId, users]);

  const onSubmit = () => {
    editUser(selectedUser);
    history.push("/projects");
  };

  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };
  return (
    <ManagerContainer>
      <Navbar />
      <div style={{ maxWidth: "60rem", margin: "4rem auto" }}>
        <Form onSubmit={onSubmit}>
          <FormGroup>
            <Label className="text-light">Change Classroom Name</Label>
            <Input
              type="text"
              name="name"
              value={selectedUser.name}
              onChange={onChange}
              placeholder="Enter Name"
            ></Input>
          </FormGroup>
          <Button type="submit" class="btn btn-dark">
            Apply
          </Button>
          <Link to="/projects" className="btn btn-secondary ml-2">
            Cancel
          </Link>
        </Form>
      </div>
      <Footer />
    </ManagerContainer>
  );
};
