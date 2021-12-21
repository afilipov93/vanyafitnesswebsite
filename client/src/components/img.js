import React from "react";
class Img extends React.Component {

  render() {
      let i = this.props.object.row.images
      let id = this.props.id
      let select = i.find((obj) => obj.id === id)

      return(
      <img className="image" key={(select.image.id)} src={(select.image.link)} alt={(select.image.alt)} />
      )
  }
}
export default Img