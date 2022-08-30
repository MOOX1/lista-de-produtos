import React, { useContext, useEffect, useState } from "react";
import { materialsContext } from "../../index";
import { materials } from "../../types/materials";
import { Response } from "../../types/response";
const List = () => {
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
        </li>
      ))}
    </ul>
  );
};

export default List;
