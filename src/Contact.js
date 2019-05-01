import React from 'react';
import './Contact.scss';
import { Link } from "react-router-dom";

class Contact extends React.Component {

  render() {
    return (
      <div className="Contact">
        <Link className="w3-bar-item w3-button" to="/">Home</Link>

        <div id="allcontact">

          <div className="leftcontact">
            <h1>Contact me<button><a target="_blank" href="https://www.linkedin.com/in/beatriz-ogura-hanashiro-35082a85/"><i class="fa fa-linkedin-square"></i></a></button></h1>

          </div>

          <div className="rightcontact">
            <form action="https://formspree.io/biahana@hotmail.com" method="POST">
              <input type="text" name="name" size="50" placeholder="Your name" required />
              <br></br>
              <br></br>
              <input type="text" name="email"  size="50" placeholder="Your e-mail" required />
              <br></br>
              <br></br>
              <textarea rows="10" cols="49" name="message" placeholder="Write your message for me" required></textarea>
              <br />
              <br />
              <input id="submit" type="submit" value="Submit"></input>
            </form>
          </div>
        </div>
      </div>

    );
  }
}
export default Contact;
