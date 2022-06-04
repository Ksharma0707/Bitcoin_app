import React, { useState } from "react";
import "./FormModal.css";

function FormModal({ setOpenModal }) {
  const [upperLimit, setUpperLimit] = useState("");
  const [lowerLimit, setLowerLimit] = useState("");
  const [items, setItems] = useState([]);


  const lowerLimitChangeHandler = (event) => {
    setLowerLimit(event.target.value);
  };
  const upperLimitChangeHandler = (event) => {
    setUpperLimit(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    localStorage.removeItem("lowerLimit");
    localStorage.removeItem('upperLimit');
    localStorage.setItem('lowerLimit', JSON.stringify(lowerLimit));
    localStorage.setItem('upperLimit', JSON.stringify(upperLimit));
    setLowerLimit("");
    setUpperLimit("");
    setOpenModal(false);
  };
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h4>Set Limit Price</h4>
        </div>
        <div>
          <form onSubmit={submitForm}>
            <div className="bodymodal">
            <span>
            <label>Lower Limit</label>
            <input
              type="text"
              name="UpperLimit"
              placeholder="Enter Lower Limit"
              value={lowerLimit}
              onChange={lowerLimitChangeHandler}
            />
            </span>
            <br></br>
            <label>Upper Limit</label>
            <input
              type="text"
              placeholder="Enter Upper Limit"
              name="Lower Limit"
              value={upperLimit}
              onChange={upperLimitChangeHandler}
            />
            </div>

            <div className="footer">
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
                id="cancelBtn"
              >
                Cancel
              </button>
              <button type="submit" id="submit">Submit</button>
            </div>
          </form>{" "}
        </div>
      </div>
    </div>
  );
}

export default FormModal;
