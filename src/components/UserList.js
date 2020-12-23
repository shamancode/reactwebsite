import { Button, ListGroup, ListGroupItem } from "reactstrap";
import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { UserListContainer } from "../components/UserListElements";
import "./listgroupcolor.css";

export const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);
  console.log(users);
  return (
    <ListGroup className="mt-4">
      {users.length > 0 ? (
        <>
          {users.map((user) => (
            <UserListContainer>
              <ListGroupItem className="d-flex dark-bg rounded-corner black-border">
                <h5>{user.name}</h5>
                <div className="ml-auto">
                  <Link className="btn btn-dark mr-1 " to={`/importcsv`}>
                    Open Classroom
                  </Link>

                  <Link
                    className="btn btn-secondary mr-1 "
                    to={`/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Button onClick={() => removeUser(user.id)} color="secondary">
                    Delete
                  </Button>
                </div>
              </ListGroupItem>
            </UserListContainer>
          ))}
        </>
      ) : (
        <h4 className="text-center text-secondary font-weight-bold">
          No Classes Yet
        </h4>
      )}
    </ListGroup>
  );
};
