import React from "react";

const Card = (props) => {

  
  const index = props.data.length -1
  
  
  return <div className="card-container">
    <h2>Resultado</h2>
    {props.data[0] ? <><img src={props.data[index].sprites.front_default} alt=""  />
    <p>{props.data[index].name}</p>
    <p>Nº {props.data[index].id}</p></> :''} 
    

  </div>;
};

export default Card;
