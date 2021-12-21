import React from "react";
import Heading from "../components/heading";
import Img from "../components/img";
class About extends React.Component {

  render() {
    
    const c = this.props.data.about.find(function(d){
      return d.type === "aboutData"
    })

      return(
      <main className="about">
        <Heading title="Over mij"/>
        <div className="row">
        <section className="col container">
          <div className="hero-container">
            <div className="image-container">
              <h3>Michael Post</h3>
            <Img object={c} id="1V0A4807" />
            </div>
            <div className="text-container">
              <p className="dark">{c.row.aboutData.text.value}</p> 
            </div>
          </div>
          <div className="mission-container">
            <div className="text-container">
              <h2>
                Mijn missie
              </h2>
              <p dangerouslySetInnerHTML={{__html: c.row.mission.text}} />
            </div>
            <blockquote>{c.row.quote.text}</blockquote>
            <p dangerouslySetInnerHTML={{__html: c.row.vision.text}} />
          </div>
        </section>
        </div>
      </main>
      )
  }
}
export default About