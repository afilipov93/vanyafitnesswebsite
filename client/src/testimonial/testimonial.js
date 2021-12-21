import React from "react";

class Testimonial extends React.Component {
  render() {
    const c = this.props.content.find(function(d){
      return d.type === "testimonial"
    })
    
    const Review = c.row.testimonial.map((data, i) => 
    <div key={i} className="border single-testimonial">
      <article className="container">
        <p>"{data.item.value}"</p>
        <p>{data.item.author}, {data.item.profession}</p>
      </article>
    </div>)
    return(
      <div className="row"><section className={"col-"+ c.col+" col testimonial container"}>{Review}</section></div>
    )
  }
}
export default Testimonial;