import React from "react";
const AboutTab = () => {
  return (
    <div className="FirstTab">
      <div className="container">
       <img src={require('../icon/BitcoinCover.jpg')}/>
       
      <p><b>Welcome to Bit Live !! </b></p>
<br></br>
      <div className="about">
        <p>
        Bitcoin is a cryptocurrency, a virtual currency designed to act as money
        and a form of payment outside the control of any one person, group, or
        entity, and thus removing the need for third-party involvement in
        financial transactions. It is rewarded to blockchain miners for the work
        done to verify transactions and can be purchased on several exchanges.
        </p>
        <br></br>
      </div>

      <div className="about">
        <p>
        Bitcoin was introduced to the public in 2009 by an anonymous developer
        or group of developers using the name Satoshi Nakamoto.
        </p>
      </div>
      </div>
    </div>
  );
};
export default AboutTab;
