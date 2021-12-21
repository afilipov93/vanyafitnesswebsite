import React from "react";

class Banner extends React.Component {
  
  render() {
    const c = this.props.content.find(function(d){
      return d.type === "banner"
    })
    const imageURL = c.row.images.map((image) => (image.image.link)).join()
    

    return(
      <div>
        <section className={"col-"+ c.col+" col banner"}>
          <article style={{backgroundImage: `url(${imageURL})`}}>
            <div className="dark overlayer" />
              <div className="text-container">
                <h2>
                  {c.row.article.title.value}
                </h2>
                <p>
                  {c.row.article.text.value}
                </p>
                {typeof c.row.button !== "undefined" ?
                <a className={c.row.button.type + " button"} href={c.row.button.link}>{c.row.button.text}</a> : null}
              </div>
          </article>
        </section>
      </div>
    )
  }
}
export default Banner;