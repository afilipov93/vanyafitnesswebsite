import React from "react";
import Img from "../components/img";

class Emphasized extends React.Component {

  render() {
    const c = this.props.content.find(function(d){
      return d.type === "emphasized"
    })
    return(
      <div className="row">
        <section className={"col-"+ c.col+" col emphasized container"}>
            <article className={c.row.background ? "highlight text-block" : "text-block"}>
              <div className="text-container">
              <h2>
                {c.row.article.title.value}
              </h2>
              <p>{c.row.article.text.value}</p>
              {typeof c.row.button !== "undefined" ?
              <a className={c.row.button.type + " button"} href={c.row.button.link}>{c.row.button.text}</a> : null}
              </div>
            </article>
          <article>
            <Img object={c} id='1V0A4524' />
          </article>
        </section>
      </div>
    )
  }
}
export default Emphasized;