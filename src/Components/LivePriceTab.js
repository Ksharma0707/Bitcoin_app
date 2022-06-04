import React, { useState, useEffect } from "react";
import ButtonComponent from "./ButtonComponent";
import emailjs from "@emailjs/browser";

const LivePriceTab = () => {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const itemLower = JSON.parse(localStorage.getItem("lowerLimit"));
  const itemUpper = JSON.parse(localStorage.getItem("upperLimit"));

  useEffect(() => {
    if (
      price &&
      (parseInt(price) > parseInt(itemUpper) ||
        parseInt(price) < parseInt(itemLower))
    ) {
      console.log("email", itemLower, itemUpper);
      var templateParams = {
        name: "Rajat",
      };
      emailjs
        .send(
          "service_ok3tyxd",
          "template_lfq572k",
          templateParams,
          "VlTA74-xAKhJEyM3k"
        )
        .then(
          (result) => {
            alert("Message Sent, We will get back to you shortly", result.text);
          },
          (error) => {
            alert("An error occurred, Please try again", error.text);
          }
        );
    } else {
      // console.log("limit condition not matched", itemLower, itemUpper);
    }
  }, [itemLower, itemUpper, price]);

  const interval = setInterval(function () {
    fetch("https://blockchain.info/ticker")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPrice(data.USD.last);
        setLoading(false);
        // console.log(price);
      })
      .catch((error) => {
        console.log(error);
      });
  }, 14000);

  return (
    <div className="SecondTab">
      <div className="card">
        <div className="container">
          <h4>
            <img src={require("../icon/Bitcoin.png")} />
            <span className="btc-title">
              <b>BitCoin</b>
            </span>
          </h4>
          <p>
            <span className="btc-price">
              Price : {loading ? "Loading..." : "$" + price}
            </span>
          </p>
            <ButtonComponent />
        </div>
      </div>
    </div>
  );
};
export default LivePriceTab;
