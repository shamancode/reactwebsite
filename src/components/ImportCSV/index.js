import React, { useState } from "react";
import * as XLSX from "xlsx";
import firebaseDb from "../../firebase";
import "./ImportCSVElements.css";

function ImportCSV() {
  const [items, setItems] = useState([]);

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      console.log(d);
      setItems(d);
      d.forEach((item) => {
        firebaseDb.child("contacts").push(item, (error) => {
          if (error) console.log(error);
        });
      });
    });
  };

  return (
    <div>
      <label for="file-upload" class="custom-file-upload">
        {" "}
        <i class="fa fa-cloud-upload"></i> Import Data From CSV{" "}
      </label>
      <input
        id="file-upload"
        type="file"
        class="btn btn-success btn-block"
        onChange={(e) => {
          const file = e.target.files[0];

          readExcel(file);
        }}
      />
    </div>
  );
}
export default ImportCSV;
