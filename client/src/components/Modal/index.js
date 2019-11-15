import React, { Component } from 'react';

let modelStyle = {
  width: '500px',
  maxWidth: '100%',
  margin: '0 auto',
  position: 'fixed',
  left: '20%',
  top: '60%',
  transform: 'translate(-50%,-50%)',
  zIndex: '999',
  backgroundColor: '#eee',
  padding: '10px 20px 40px',
  borderRadius:'8px',
  display: 'flex',
  flexDirection: 'column'
};
let closeButton = {
  marginBottom: '15px',
  padding: '3px 8px',
  cursor: 'pointer',
  borderRadius: '50%',
  border: 'none',
  width: '30px',
  height: '30px',
  fontWeight: 'bold',
  alignSelf: 'flex-end'
}
class ModalPage extends Component {


render() {
  let model = (
  <div style={modelStyle}>
    <button style={closeButton} onClick={this.props.onClose}>x</button>
 <div>{this.props.children}</div>
 </div>
 );
 if(!this.props.isOpen){
   model = null;
 }
  return (
    <div>
      {model}
    </div>
    );
  }
}

export default ModalPage;