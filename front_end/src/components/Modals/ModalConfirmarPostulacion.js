import Modal from 'react-modal';
import React from "react";


export default function ModalConfirmarPostulacion(props) {
  if (!props.modalIsOpen) {
    console.log("null props.modalIsOpen: ", props.modalIsOpen)
    return null
  }
  console.log("props.modalIsOpen: ", props.modalIsOpen)
  return (
    <>
      <Modal
        appElement={document.getElementById("root")}
        isOpen={props.modalIsOpen}
        onRequestClose={props.onClose}
        contentLabel="Example Modal"
        style={
          {
            content: {
              // color: 'blue',
              // maxWidth: "720px",
              // maxHeight: "400px",
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)'
            }
          }
        }
      >
        <h1>Postulación a propuesta</h1>
        <p>¿Desea postular a la propuesta: {props.tituloPropuesta}?</p>
        <div className={"Botones"} style={{
          paddingTop: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          columnGap: "5px"
        }}>
          <button onClick={props.onClose}>
            Sí
          </button>
          <button onClick={props.onClose}>
            Cancalar
          </button>
        </div>
      </Modal>
    </>
  );
}
