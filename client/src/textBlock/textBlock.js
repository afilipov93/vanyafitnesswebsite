import React from "react";
import Img from "../components/img";
class TextBlock extends React.Component {


  render() {
    const c = this.props.content.find(function(d){
      return d.type === "textBlock"
    })
  
    return(
      <div className="row">
        {/* note to self: add left right with class and flex direction */}
        <section className={"col-"+c.col+" col article container"}>
          <article>
            <div className="image-container">
              <Img object={c} id='1V0A4041'/>
              <Img object={c} id='1V0A4211'/>
            </div>
          </article>
          <article>
            <div className="text-container">
              <h3>{c.row.article.title.value}</h3>
              <p>{c.row.article.text.value}</p>
            </div>
          </article>
        </section>
      </div>
    )
  }
}
export default TextBlock;