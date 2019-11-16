import React, { Component } from 'react';

let modelStyle = {
  
  width: '270px',
  maxWidth: '100%',
  margin: '0 auto',
  position: 'fixed',
  left: '39%',
  top: '60%',
  transform: 'translate(-50%,-50%)',
  zIndex: '999',
  // backdropFilter: "blur(10px)",
  // background: 'transparent',
  background: 'yellow',
  opacity: '10px',
  border: "1px solid white",
  padding: '10px 20px 30px',
  borderRadius:'8px',
  display: 'flex',
  flexDirection: 'column'
};
let closeButton = {
  marginBottom: '15px',
  background: 'red',
  color: "white",
  padding: '3px 8px',
  cursor: 'pointer',
  borderRadius: '50%',
  border: '0.1px solid black',
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