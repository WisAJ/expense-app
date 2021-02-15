import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <div>
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected Options"
    closeTimeoutMS={200}
    className="modal"
  >
  
    <h3>Are you sure to do this,</h3>
    <button className="modal__button" onClick={props.onRemove}>Yes</button> 
    <button className="modal__button" onClick={props.handleClearSelectedOption}>NO</button> 
    
  </Modal>

 
 <button className='btn-secondary' onClick={props.handlePick}>Remove Expense</button>
  </div>

  
);

export default OptionModal;