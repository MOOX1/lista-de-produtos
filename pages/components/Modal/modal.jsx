import Swal from "sweetalert2";
import React from "react";
import { useContext } from "react";
import { materialsContext } from "../../index";
import { Response } from "../../types/response";

  const Modal =  (props) => {
  
  const onModal = () => {
    console.log(props.id)
    fetch(`http://localhost:3000/?line=vjsdbj&description=khcbbsd&url_thumbnail=kjdbskbsd&id=${props.id.id}&edit=1`)
    .then((response) => response.json())
    .then((response) =>console.log("cheou"));

    const { value: formValues } = Swal.fire({
      title: 'new material',
      html:
      '<input placeholder="description" id="swal-input1" class="swal2-input">' +
      '<input placeholder="line" id="swal-input2" class="swal2-input">',
        focusConfirm: false,
        preConfirm: () => {
          console.log("uhuuu")
          let description = document.getElementById('swal-input1').value
          let line = document.getElementById('swal-input2').value
          fetch(`http://localhost:3000/?line=vjsdbj&description=khcbbsd&url_thumbnail=kjdbskbsd&id=${props.id.id}&edit=1`)
          .then((response) => response.json())
          .then((response) =>console.log("cheou"));

        }
      })
      
      if (formValues) {
        Swal.fire(JSON.stringify(formValues))
      }
    }
      
      return (
        <button onClick={() =>onModal()} >{props.text}</button>
      )

}

export default Modal;