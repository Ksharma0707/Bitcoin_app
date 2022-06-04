import React, { useState, useEffect } from "react";
import FormModal from "./FormModal";

const ButtonComponent = (props) => {
  const [lowerLimit, setLowerLimit] = useState([]);
  const [upperLimit, setUpperLimit] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const itemLower = JSON.parse(localStorage.getItem("lowerLimit"));
  const itemUpper = JSON.parse(localStorage.getItem("upperLimit"));

  var button = (
    <button
      className="openModalBtn"
      onClick={() => {
        setModalOpen(true);
      }}
    >
      set Limit
    </button>
  );

  useEffect(() => {
    if (itemLower) {
      setLowerLimit(itemLower);
    }

    if (itemUpper) {
      setUpperLimit(itemUpper);
    }
  }, [itemLower]);

  if (lowerLimit.length != 0 && upperLimit.length != 0) {
    button = (
      <div className="containerButton">
        <button
          className="openModalBtn"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Edit Limits
        </button>
        <div className="limitclass">Lower Limit : ${lowerLimit}</div>
        <div className="limitclass">Upper Limit : ${upperLimit}</div>
      </div>
    );
  } else {
    button = (
      <button
        className="openModalBtn2"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Set Limit
      </button>
    );
  }

  return (
    <div>
      {button}
      {modalOpen && <FormModal setOpenModal={setModalOpen} />}
    </div>
  );
};

export default ButtonComponent;
