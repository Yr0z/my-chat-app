import React from 'react'
import './Contact.css'

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.online,
    };
  }
  render () {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt={this.props.name}/>
        <div className='contain'>
          <p className='name'>{this.props.name}</p>
      
      <div className='status'
      onClick={envent => {
          const newOnline = !this.state.online;
          this.setState({ online: newOnline }) }}>
      <div className="status-text">
      <div className={this.state.online ? "status-online" : "status-offline"}>
      </div>
        {this.state.online ? "online" : "offline"}
      </div>
      </div>
   </div>
   </div>
     );
   }
}


export default Contact