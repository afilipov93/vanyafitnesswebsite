import React from "react";
import ContactForm from '../components/contactForm';
import Heading from "../components/heading";
import Img from "../components/img";
class Contact extends React.Component {

  render() {
    
    const c = this.props.data.contact.find(function(d){
      return d.type === "personalData"
    })
    
      return(
      <main className="contact">
        <Heading title="Contact"/>
        <div className="row">
        <section className="col col-2 container">
          <div className='contact-form-container'>
            <ContactForm title="Gaan we samen aan de slag?"/>
          </div>
          <table className="personal-data">
            <tbody>
            <tr><td>Mobiel</td><td><a href={"tel:" + c.row.personalData.phone}>{c.row.personalData.phone}</a></td></tr>
            <tr><td>Email</td><td><a href={"mailto:" + c.row.personalData.email}>{c.row.personalData.email}</a></td></tr>
            <tr><td>Adres</td><td dangerouslySetInnerHTML={{__html:c.row.personalData.visitAddress}} /></tr>
            </tbody>
          </table>
        </section>
        </div>
        <div className="row">
          <section className="col container">
            <div className="image-container">
              <Img object={c} id='1V0A3901' />
            </div>
          </section>
        </div>
      </main>
      )
  }
}
export default Contact