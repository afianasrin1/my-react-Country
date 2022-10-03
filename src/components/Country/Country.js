import React from "react";
import "./Country.css";
const Country = (props) => {
  // console.log(props.country);
  const { region, population, languages, name, flags } = props.country;
  return (
    <div className="country bg-success">
      <h1>name:{name.common}</h1>
      <img src={flags.png} alt="" />
      <h2>region:{region}</h2>
      <h3>population:{population}</h3>
      {/* <h3>language:{languages}</h3> */}
      {/* <h5> languages:{languages.spa ? languages.spa : "not Found"}</h5> */}
    </div>
  );
};

export default Country;
