import React from 'react'
import { Modal, Button } from 'react-bootstrap'


const ConfirmModal = ({ show, setShow, handleYes, children }) => {
  return(
    <Modal show={show} onHide={() => setShow(false)} style={{top: '25%'}}>
      <Modal.Body>
        <h3 className="text-center my-4">{children}</h3>
      </Modal.Body>
      <div className="mt-3 d-flex justify-content-end p-3 w-100">
        <button className="btn px-3 btn-primary mx-4" onClick={() => setShow(false)} type="button">No</button>
        <button className="btn px-3 btn-info" onClick={handleYes} type="button">Yes</button>
      </div>
    </Modal>
  )
}

export default ConfirmModal
