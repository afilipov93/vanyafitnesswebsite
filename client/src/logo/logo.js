import React from "react";

class Logo extends React.Component {

  render() {
    return(
      <div className="logo">
      <a href="/">
        <img src={this.props.content.src} alt={this.props.content.alt}/>
      </a>
      </div>
    )
  }
}
export default Logo