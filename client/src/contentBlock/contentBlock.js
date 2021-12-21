import React from "react";
import Trigger from "../trigger/trigger";
import Banner from "../banner/banner";
import Testimonial from "../testimonial/testimonial";
import TextBlock from "../textBlock/textBlock";


class ContentBlock extends React.Component {
  render() {
    const type = this.props.type
    let block;

    if(type === "trigger") {
      block = <Trigger />
    } 
    else if(type === "textBlock") {
      block = <TextBlock />
    }
    else if(type === "testimonial") {
      block = <Testimonial />
    }
    else if (type === "banner") {
      block = <Banner />
    }
    else {
      block = null;
    }
    return(
      {block}
    )
  }
}
export default ContentBlock