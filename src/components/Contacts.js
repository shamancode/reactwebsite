import React, { useState, useEffect } from "react";
import ContactForm from "./ContactFrom";
import firebaseDb from "../firebase";
import Demo from "./QRCode/index.js";
import ImportCSV from "../components/ImportCSV";
import "./listgroupcolor.css";

const Contacts = () => {
  var [currentId, setCurrentId] = useState("");
  var [contactObjects, setContactObjects] = useState({});

  useEffect(() => {
    firebaseDb.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setContactObjects({
          ...snapshot.val(),
        });
      }
    });
  }, []);

  const addOrEdit = (obj) => {
    if (currentId == "")
      firebaseDb.child("contacts").push(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    else
      firebaseDb.child(`contacts/${currentId}`).set(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
  };

  const onDelete = (id) => {
    if (window.confirm("Are you sure to delete this record?")) {
      firebaseDb.child(`contacts/${id}`).remove((err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-md-5">
          <ContactForm
            {...{ currentId, contactObjects, addOrEdit }}
          ></ContactForm>

          <ImportCSV />
        </div>
        <div className="col-md-7">
          <table className="table table-borderless table-stripped">
            <thead className="thead-light">
              <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(contactObjects).map((key) => (
                <tr key={key}>
                  <td className="bg-light ">{contactObjects[key].fullName}</td>
                  <td className="bg-light ">{contactObjects[key].mobile}</td>
                  <td className="bg-light ">{contactObjects[key].email}</td>
                  <td className="bg-light ">
                    <a
                      className="btn text-dark "
                      onClick={() => {
                        setCurrentId(key);
                      }}
                    >
                      <i className="fas fa-pencil-alt"></i>
                    </a>
                    <a
                      className="btn text-danger"
                      onClick={() => {
                        onDelete(key);
                      }}
                    >
                      <i className="far fa-trash-alt"></i>
                    </a>
                    <Demo />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Contacts;
