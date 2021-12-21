import React from "react";

class Heading extends React.Component {

  render() {
    return(
      <div className="row">
        <section className="col container">
          <div className="headings">
            <h1>{this.props.title}</h1>
            <hr/>
          </div>
        </section>
      </div>
    )
  }
}
export default Heading