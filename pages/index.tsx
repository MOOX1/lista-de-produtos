import React, { useState } from "react";
import { useEffect } from "react";
import List from "./components/List/List";
import { Response } from "./types/response";
import Search from "./components/search/Seach";
import Modal from "./components/Modal/modal";



export  const materialsContext = React.createContext<Response>({});

export default function Home() {
  const [response, setResponse] = useState<Response>();

  const PegandoDandos = () => {
    fetch("http://localhost:3001/")
      .then((response) => response.json())
      .then((response : Response) => setResponse(response));
  };

  useEffect(() => {
    PegandoDandos();
  }, []);

  const HandleOnChange = (e) => {
    const materialsFilter = response.data.materials.filter((item) => {

      let lista = item.description.includes(e.target.value)
      if (lista === false ) {
          return item.line.includes(e.target.value)
      } else if (lista === true ) {
        return item.description.includes(e.target.value)
      } 


  });
    if (!e.target.value ) {
      PegandoDandos()
    }
    setResponse({data: {materials : materialsFilter}})
  };
  // console.log(response)

  return (
    <div>
    <materialsContext.Provider value={response}>
      <Search onChange={(e: string) => HandleOnChange(e)} />
      <List />
    </materialsContext.Provider>
    </div>
  );
}
