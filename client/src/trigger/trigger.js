import React from "react";
import ContactForm from "../components/contactForm";
import Img from "../components/img";

class Trigger extends React.Component {

  // convertArrayToObject = (array, key) => 
  //   array.reduce((obj, item) => ((obj[[item[key]]] = item), obj), {});
  
  render() {
    const c = this.props.content.find(function(d){
      return d.type === "trigger"
    })
    
    return(
      <div className="row">
        
          <section className={"col-"+ c.col+" col hero container"}>
            <div>
              <h1>{c.row.title.value}</h1>
              <ContactForm title="Lijkt het je leuk? Neem contact op"/>
            </div>
            <div className="image-container"><Img object={c} id='1V0A454' /><p className="hero-info"><span className=" bold">{c.row.owner}</span></p></div>
          </section>
      </div>
    )
  }
}
export default Trigger;