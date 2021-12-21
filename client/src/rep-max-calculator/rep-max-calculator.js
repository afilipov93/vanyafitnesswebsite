import React, { Fragment } from "react";
import ContactForm from "../components/contactForm";

class RepMaxCalculator extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      reps: "",
      weight: "",
      table: []
    }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  roundHalf(num) {
    return (Math.round(num*4)/4).toFixed(2)
  }

  handleSubmit(event){
    event.preventDefault();
    this.state.table.splice(0);
    const repMax = this.state.weight * (36 / (37 - this.state.reps))
    let table = []
    for(var i = 1; i <= 20; i++) {
        table.push(this.roundHalf(((repMax * (37 - i)) / 36)))
      };
      this.setState({table: table})
    } 

  render() {
    return(
      <main className="calculator">
        <div className="row">
          <section className="col container">
            <div className="headings">
              <h1>1RM calculator</h1>
              <hr/>
            </div>
          </section>
        </div>
        <div className="row">
          <section className="col container">
            <form className="calculate-form" onSubmit={this.handleSubmit}>
              <h3>Vul je gegevens in om je 1 rep max uit te rekenen</h3>
              <div className="input-container">
                <div className="input-field">
                  <label htmlFor="reps">De reps:</label>
                  <input name="reps" type="number" id="reps" value={this.state.reps} onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                  <label htmlFor="weight">Het gewicht (kg):</label>
                  <input name="weight" type="number" id="weight" value={this.state.weight} onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                  <input type="submit" className="button primair" value="Bereken"/>
                </div>
              </div>
            </form>
          </section>
        </div>
        {this.state.table.length > 0 && 
          <div className="row">
            <section className="col container calc">
              <MaxCalc number={this.state.table}/>
            </section>
          </div>}
      </main>
    )
  }
}

class MaxCalc extends React.Component {

  render() {
  const data = this.props.number
  const values = data.map((weigth,index) => {
  return (
    <div className="trow" key={weigth}><span>{index + 1}</span><span>{weigth}</span></div>)
  })
  return(
    <Fragment>
      <div className="table">
        <div className="thead">
          <div className="trow">
            <span>Reps</span><span>Gewicht</span>
          </div>
        </div>
        <section className="tbody">
          {values}
        </section>
      </div>
      <div className="outcome-quote">
        <div>
          <h2>Jouw 1 rep max is: <span>{data[0]}  kg</span></h2>
        </div>
        <div className="cta-contact">
          <ContactForm title="Wil je dit verhogen? Laten we samen trainen"/>
        </div>
      </div>
      </Fragment>)
}
}
export default RepMaxCalculator