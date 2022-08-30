import React, { useContext, useEffect, useState } from "react";
import { materialsContext } from "../../index";
import { materials } from "../../types/materials";
import { Response } from "../../types/response";
import Modal from "../Modal/modal";
const List = (props) => {
  const response = useContext<Response>(materialsContext);
  const [materials, setMaterials] = useState<materials>();

  // Para evitar loop infinito
  const HandleReponse = () => {
    setMaterials(response?.data.materials);
  };

  useEffect(() => {
    HandleReponse();
  }, [response]);

  return (
    <ul className="container">
      {materials?.map((item, index) => (
        <li key={index}>
          <div>
            <img width={250} src={item.url_thumbnail} alt="material" />
          </div>
          <div className="title">{item.description}</div>
          <div>{item.line}</div>
          <Modal text="EDIT" id={item} />
        </li>
      ))}
    </ul>
  );
};

export default List;
