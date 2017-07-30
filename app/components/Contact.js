import React from 'react';
import { connect } from 'react-redux'
import { submitContactForm } from '../actions/contact';
import Messages from './Messages';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) { 
    event.preventDefault();
    this.props.dispatch(submitContactForm(this.state.name, this.state.email, this.state.message));
  }

  render() {
    return (
      <div className="paddingTop container">
        <h1 className="section-title landing-header">Contact</h1>
<div className="row">
  <div className="col-md-6">
    <h2 className="title-contact">Say Hello!</h2>
<div className="contact-body">
I'm best contacted via this form.
or via email: <a href="mailto:silampawar@gmail.com">silampawar@gmail.com</a></div>
<div className="contact-body">
You can also find more information about me and some of my work on these social platforms:
</div>
<div className="contact-social"><a href="https://www.linkedin.com/in/silam-pawar-82b67114/" target="_blank"><i className="fa fa-linkedin-square fa-3" aria-hidden="true"></i></a></div>
<div  className="contact-social"><a href="https://github.com/silampawar" target="_blank"><i className="fa fa-github fa-3" aria-hidden="true"></i></a></div>
<div  className="contact-social"><i className="fa fa-medium fa-3" aria-hidden="true"></i></div>
  </div>
  <div className="col-md-6">
        <div className="panel">
         
          <div className="panel-body">
            <Messages messages={this.props.messages}/>
            <form onSubmit={this.handleSubmit.bind(this)} className="form-horizontal">
              <div className="form-group">
               
                <div className="col-sm-8">
                  
                  Your Name<sup>*</sup><input type="text" name="name" id="name" className="form-control" value={this.state.name} onChange={this.handleChange.bind(this)} autoFocus/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email" className="col-sm-2">Email<sup>*</sup></label>
                <div className="col-sm-8">
                  <input type="email" name="email" id="email" className="form-control" value={this.state.email} onChange={this.handleChange.bind(this)}/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message" className="col-sm-2">Message<sup>*</sup></label>
                <div className="col-sm-8">
                  <textarea name="message" id="message" rows="7" className="form-control" value={this.state.message} onChange={this.handleChange.bind(this)}></textarea>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-8">
                 <button type="submit" className="btn btn-dark btn-block">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Contact);